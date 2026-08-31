"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import Grid from "@/components/charts/grid"
import LineChart, { Line } from "@/components/charts/line-chart"
import { ChartTooltip } from "@/components/charts/tooltip"
import { Metric, MetricChange, MetricLabel, MetricValue } from "@/components/metric"

export function Metrics01() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cloudflare-analytics')
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch analytics", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-12">
        <p className="text-muted-foreground">Loading Analytics...</p>
      </div>
    );
  }

  if (!data || data.error) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="py-6">
        <div className="px-4 md:px-6">
          <h2 className="font-heading text-3xl font-medium tracking-tight mb-8">
            Jammify Insights
            <sup className="top-[-0.75em] ml-2 text-sm font-medium tracking-normal text-muted-foreground">
              ({format(new Date(data.startDate), "MMM d")} –{" "}
              {format(new Date(data.endDate), "MMM d")})
            </sup>
          </h2>

          <div className="relative border border-border rounded-xl overflow-hidden bg-background">
            <dl className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
              <Metric>
                <MetricLabel>
                  Users
                  <MetricChange value={data.changes?.totalSessions} />
                </MetricLabel>
                <MetricValue>
                  {data.summary.totalSessions.toLocaleString("en-US")}
                </MetricValue>
              </Metric>

              <Metric className="border-t md:border-t-0 md:border-l border-border">
                <MetricLabel>
                  Views
                  <MetricChange value={data.changes?.totalScreenViews} />
                </MetricLabel>
                <MetricValue>
                  {data.summary.totalScreenViews.toLocaleString("en-US")}
                </MetricValue>
              </Metric>

              <Metric className="border-t md:border-t-0 md:border-l border-border">
                <MetricLabel>
                  Countries
                  <MetricChange value={data.changes?.totalCountries} />
                </MetricLabel>
                <MetricValue>
                  {data.summary.totalCountries?.toLocaleString("en-US")}
                </MetricValue>
              </Metric>
            </dl>

            <div className="p-4 md:p-6 bg-background">
              {data.series && data.series.length > 0 ? (
                <LineChart
                  className="w-full h-[300px]"
                  data={data.series}
                  margin={{ top: 16, right: 16, bottom: 0, left: 0 }}
                >
                  <Grid horizontal />
                  <Line
                    dataKey="views"
                    name="Views"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                  <ChartTooltip />
                </LineChart>
              ) : (
                <div className="grid aspect-2/1 w-full place-content-center md:aspect-3/1">
                  <p className="text-muted-foreground">No insights available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
