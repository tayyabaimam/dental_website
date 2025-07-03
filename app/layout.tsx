import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Emergency Dental Care Sydney - Same Day Appointments | Sydney Emergency Dental",
  description: "Severe tooth pain? Broken tooth? Sydney Emergency Dental provides same-day emergency appointments. Extended hours, expert dentists, immediate relief. Call now!",
  keywords: "emergency dental Sydney, same day dental appointments, tooth pain relief, broken tooth repair, emergency dentist Sydney, dental trauma, urgent dental care",
  authors: [{ name: "Sydney Emergency Dental" }],
  openGraph: {
    title: "Emergency Dental Care Sydney - Same Day Appointments",
    description: "Severe tooth pain? Broken tooth? We'll see you today. Call now for immediate relief.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Dental Care Sydney - Same Day Appointments",
    description: "Severe tooth pain? Broken tooth? We'll see you today. Call now for immediate relief.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
