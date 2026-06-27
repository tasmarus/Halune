import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* PRELOAD RECHARTS */}
        {children}

        <BottomNav />
      </body>
    </html>
  );
}