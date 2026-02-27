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
  title: "Mapp Studio — Mobile App Development",
  description:
    "Mapp Studio builds world-class iOS, Android, and cross-platform mobile apps. Premium design, performant code, exceptional user experiences.",
  keywords: ["mobile app development", "iOS", "Android", "React Native", "Flutter", "UI/UX design"],
  openGraph: {
    title: "Mapp Studio — Mobile App Development",
    description: "We build apps people actually use.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
