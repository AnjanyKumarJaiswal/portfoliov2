import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjany Kumar",
  description: "Full Stack Web Developer & Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-blue-500/30 overflow-x-hidden">
        <div className="bg-glow" />
        <main className="relative z-10 min-h-screen max-w-[640px] mx-auto px-6 pt-24 pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}
