import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://jammify-music.vercel.app/api/rating", {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour to avoid spamming the API
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying ratings:', error);
    return NextResponse.json({ error: 'Failed to fetch ratings' }, { status: 500 });
  }
}
