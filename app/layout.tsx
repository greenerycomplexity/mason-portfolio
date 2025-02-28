import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Mason Cao",
  description: "Personal Portfolio of Mason Cao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
