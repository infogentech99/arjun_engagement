import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://arjun-engagement.vercel.app/"),

  openGraph: {
    title: "Arjun Reddy & Divya Srinivasan",
    description: "Join as they begin their forever. 29th, 30th August and 3rd September 2026",
    url: "https://arjun-engagement.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Arjun Reddy & Divya Srinivasan",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Arjun Reddy & Divya Srinivasan",
    description: "Join as they begin their forever. 29th, 30th August and 3rd September 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://arjun-engagement.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
