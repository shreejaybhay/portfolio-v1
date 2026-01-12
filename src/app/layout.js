import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shree Jaybhay - Full Stack Developer | React, Next.js, Node.js, Mongodb",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building clean, scalable web applications with modern technologies. View my portfolio and projects.",
  keywords: "Full Stack Developer, React Developer, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Web Development, Portfolio, Shree Jaybhay",
  authors: [{ name: "shree jaybhay" }],
  creator: "Shree Jaybhay",
  publisher: "Shree Jaybhay",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shree-jaybhay.vercel.app/",
    title: "Shree Jaybhay - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building clean, scalable web applications with modern technologies.",
    siteName: "Shree Jaybhay Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/155870646?s=400&u=870734441b2d80a665a2f734245ba815c0a5b871&v=4",
        width: 400,
        height: 400,
        alt: "Shree Jaybhay - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Jaybhay - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building clean, scalable web applications.",
    creator: "@shreejaybhay26",
    images: ["https://avatars.githubusercontent.com/u/155870646?s=400&u=870734441b2d80a665a2f734245ba815c0a5b871&v=4"],
  },
  alternates: {
    canonical: "https://shree-jaybhay.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#08090a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shree-jaybhay.vercel.app/" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
