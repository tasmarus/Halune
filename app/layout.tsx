import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Halune — AI Application Marketplace",
  description: "A modern marketplace for discovering, building, and running AI applications.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}
