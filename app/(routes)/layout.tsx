import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Last Binary",
  description: "Last Binary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen w-full text-gray-100 bg-blue-300">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
