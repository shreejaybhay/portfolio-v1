"use client";

import React, { useEffect, useState } from "react";

// --- Custom UI Components for Testimonials ---

export function Marquee({ children, className = "" }) {
  return <div className={`relative flex w-full overflow-hidden ${className}`}>{children}</div>;
}

export function MarqueeContent({ children, direction = "left", duration = "300s" }) {
  return (
    <div
      className="flex w-max min-w-full shrink-0 items-stretch justify-around gap-0 animate-marquee"
      style={{
        animationDirection: direction === "right" ? "reverse" : "normal",
        "--duration": duration,
      }}
    >
      {children}
      {children}
    </div>
  );
}

export function MarqueeItem({ children, className = "" }) {
  return <div className={`flex-shrink-0 ${className}`}>{children}</div>;
}

export function MarqueeFade({ side }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-10 w-1/4 ${
        side === "left"
          ? "left-0 bg-gradient-to-r from-background to-transparent"
          : "right-0 bg-gradient-to-l from-background to-transparent"
      }`}
    />
  );
}

export function Testimonial({ children, className = "" }) {
  return (
    <div className={`flex flex-col justify-between p-4 w-[320px] h-full gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function TestimonialQuote({ children, className = "" }) {
  return <div className={`text-sm font-sans leading-snug text-foreground/90 ${className}`}>{children}</div>;
}

export function TestimonialAuthor({ children }) {
  return <div className="flex items-center gap-3 mt-auto">{children}</div>;
}

export function TestimonialAvatar({ children }) {
  return <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">{children}</div>;
}

export function TestimonialAvatarImg({ src, alt }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random`;
    return <img src={fallbackSrc} alt={alt} className="aspect-square h-full w-full object-cover" loading="lazy" />;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="aspect-square h-full w-full object-cover" 
      loading="lazy" 
      onError={() => setError(true)}
    />
  );
}

export function TestimonialAvatarRing() {
  return <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-border/20" />;
}

export function TestimonialAuthorName({ children }) {
  return <div className="font-semibold font-sans text-sm text-foreground">{children}</div>;
}

export function TestimonialAuthorTagline({ children }) {
  return <div className="text-xs text-yellow-500">{children}</div>;
}


// --- Main Components ---

export function TestimonialList({ direction, data, isOneLine }) {
  const duration = `${data.length * 15}s`; // 15 seconds per card

  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />

      <MarqueeContent direction={direction} duration={duration}>
        {data.map((item, idx) => (
          <MarqueeItem
            key={`${item.authorName}-${idx}`}
            className="mx-0 h-full border-r border-border"
          >
            {item.url && item.url !== "#" ? (
              <a
                className="block h-full transition-[background-color] hover:bg-muted/50"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TestimonialItem {...item} isOneLine={isOneLine} />
              </a>
            ) : (
              <div className="block h-full transition-[background-color] hover:bg-muted/50">
                <TestimonialItem {...item} isOneLine={isOneLine} />
              </div>
            )}
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  );
}

function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote,
  isOneLine,
}) {
  return (
    <Testimonial>
      <TestimonialQuote className={`overflow-hidden text-ellipsis ${isOneLine ? "whitespace-nowrap" : "line-clamp-3"}`}>
        <p className={isOneLine ? "truncate" : ""}>{quote}</p>
      </TestimonialQuote>

      <TestimonialAuthor>
        <TestimonialAvatar>
          <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
          <TestimonialAvatarRing />
        </TestimonialAvatar>
        
        <div>
          <TestimonialAuthorName>{authorName}</TestimonialAuthorName>
          <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
        </div>
      </TestimonialAuthor>
    </Testimonial>
  );
}

export function Testimonials02() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch("/api/jammify-ratings")
      .then((res) => res.json())
      .then((data) => {
        // Filter out empty comments and 1-word comments
        const valid = data.ratings.filter((r) => {
          // Only keep 4 and 5 star ratings
          if (r.rating < 4) return false;
          
          const text = r.comment ? r.comment.trim() : "";
          if (!text) return false;
          // Must have at least 2 words
          return text.split(/\s+/).length > 1;
        });
        
        const formatted = valid.map((r) => ({
          authorAvatar: r.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.user.name)}&background=random`,
          authorName: r.user.name,
          authorTagline: "★".repeat(r.rating) + "☆".repeat(5 - r.rating),
          quote: r.comment,
          url: "#"
        }));

        // Strictly put long reviews (> 60 chars) on top, short on bottom
        const longReviews = formatted.filter(r => r.quote.length > 60);
        const shortReviews = formatted.filter(r => r.quote.length <= 60);

        if (longReviews.length > 0 && shortReviews.length > 0) {
          setData1(longReviews);
          setData2(shortReviews);
        } else {
          // Fallback if one category is empty
          const sortedByLength = [...formatted].sort((a, b) => b.quote.length - a.quote.length);
          const mid = Math.ceil(sortedByLength.length / 2);
          setData1(sortedByLength.slice(0, mid));
          setData2(sortedByLength.slice(mid));
        }
      })
      .catch((err) => console.error("Failed to fetch ratings", err));
  }, []);

  if (data1.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <div className="pt-8 pb-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between px-4 md:px-6 mb-6 gap-4">
          <div>
            <h2 className="font-sans text-3xl font-medium tracking-tight text-[--foreground] mb-2">
              Loved by users worldwide
            </h2>
            <p className="text-base text-[#737373] dark:text-[#A3A3A3]">
              See what people are saying about my Jammify project.
            </p>
          </div>
          
          <a
            href="https://jammify-music.vercel.app/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shrink-0"
          >
            See all reviews
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="border-y border-border relative flex flex-col">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee var(--duration, 300s) linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />
          
          <div className="relative border-b border-border">
            <TestimonialList data={data1} />
          </div>
          <div className="relative">
            <TestimonialList data={data2} direction="right" isOneLine={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
