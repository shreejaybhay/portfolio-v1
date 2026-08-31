import { NextResponse } from 'next/server';

export async function GET() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !token) {
    console.error("Missing Cloudflare Environment Variables");
    return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
  }
  
  // Calculate date range for the last 30 days
  const now = new Date();
  const endDateStr = now.toISOString().split('T')[0] + 'T23:59:59Z';
  const startDate = new Date();
  startDate.setDate(now.getDate() - 30);
  const startDateStr = startDate.toISOString().split('T')[0] + 'T00:00:00Z';

  // For changes, we need the previous 30 days
  const prevEndDate = new Date(startDate);
  prevEndDate.setDate(prevEndDate.getDate() - 1);
  const prevEndDateStr = prevEndDate.toISOString().split('T')[0] + 'T23:59:59Z';
  const prevStartDate = new Date(prevEndDate);
  prevStartDate.setDate(prevStartDate.getDate() - 30);
  const prevStartDateStr = prevStartDate.toISOString().split('T')[0] + 'T00:00:00Z';
  
  const query = `
    query {
      viewer {
        accounts(filter: {accountTag: "${accountId}"}) {
          current: rumPageloadEventsAdaptiveGroups(
            limit: 50,
            filter: {
              datetime_geq: "${startDateStr}",
              datetime_leq: "${endDateStr}",
            }
          ) {
            count
            sum {
              visits
            }
            dimensions {
              date
            }
          }
          countries: rumPageloadEventsAdaptiveGroups(
            limit: 500,
            filter: {
              datetime_geq: "${startDateStr}",
              datetime_leq: "${endDateStr}",
            }
          ) {
            dimensions {
              countryName
            }
          }
          previous: rumPageloadEventsAdaptiveGroups(
            limit: 50,
            filter: {
              datetime_geq: "${prevStartDateStr}",
              datetime_leq: "${prevEndDateStr}",
            }
          ) {
            count
            sum {
              visits
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Cache for 1 hour to prevent API rate limiting
    });
    
    const json = await res.json();
    
    if (json.errors) {
      console.error("Cloudflare GraphQL Error:", json.errors);
      return NextResponse.json({ error: "Failed to fetch from Cloudflare" }, { status: 500 });
    }

    const currentGroups = json.data?.viewer?.accounts?.[0]?.current || [];
    const prevGroups = json.data?.viewer?.accounts?.[0]?.previous || [];
    const countriesList = json.data?.viewer?.accounts?.[0]?.countries || [];
    const totalCountries = countriesList.length;

    // Sort series by date
    currentGroups.sort((a, b) => new Date(a.dimensions.date).getTime() - new Date(b.dimensions.date).getTime());

    // Compute totals
    let currentViews = 0;
    let currentSessions = 0;
    const series = currentGroups.map(g => {
      currentViews += g.count;
      currentSessions += g.sum.visits;
      return {
        date: g.dimensions.date,
        totalSessions: g.sum.visits,
        views: g.count,
      };
    });

    let prevViews = 0;
    let prevSessions = 0;
    prevGroups.forEach(g => {
      prevViews += g.count;
      prevSessions += g.sum.visits;
    });

    const calculateChange = (current, previous) => {
      if (previous === 0) return null;
      return ((current - previous) / previous) * 100;
    };

    const data = {
      summary: {
        totalSessions: currentSessions,
        totalScreenViews: currentViews,
        totalCountries: totalCountries,
      },
      changes: {
        totalSessions: calculateChange(currentSessions, prevSessions),
        totalScreenViews: calculateChange(currentViews, prevViews),
        totalCountries: null,
      },
      series,
      startDate: startDateStr.split('T')[0],
      endDate: endDateStr.split('T')[0],
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
