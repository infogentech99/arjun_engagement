// import DisableInspect from "@/app/components/DisableInspect";
import type { Metadata } from "next";
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


export const metadata: Metadata = {
  metadataBase: new URL("https://varunwedsyuvashri.invitearc.com/"),

  openGraph: {
    title: "Varun Prasad & Yuvashri",
    description: "Join as they begin their forever. 30th August 2026",
    url: "https://varunwedsyuvashri.invitearc.com/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Varun Prasad & Yuvashri ",
      }, 
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Varun Prasad & Yuvashri",
    description: "Join as they begin their forever. 30th August 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://varunwedsyuvashri.invitearc.com/og.jpg",
    "og:image:type": "image/jpg",
  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <DisableInspect />  */}
        {children}
        
      </body>
    </html>
  );
}