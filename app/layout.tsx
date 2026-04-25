import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Anjany Kumar Jaiswal",
  description: "Full Stack Web Developer & AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="bg-grid" />
        
        {/* Structural Grid Lines */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-[360px] top-0 bottom-0 w-px border-l border-dashed border-grid" />
          <div className="absolute left-1/2 translate-x-[360px] top-0 bottom-0 w-px border-r border-dashed border-grid" />
        </div>

        <main className="min-h-screen max-w-full">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
