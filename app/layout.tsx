import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Anjany Kumar Jaiswal",
  description: "Full Stack Web Developer & Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">
        <main className="relative z-10 min-h-screen max-w-[640px] mx-auto px-6 pt-24 pb-32">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
