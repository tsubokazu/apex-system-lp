import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AuthProvider } from "@/contexts/AuthContext";
export const metadata: Metadata = {
  title: "Apex System",
  description: "Apex System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <div className="flex flex-col min-h-screen w-full text-gray-100 bg-blue-300">
            <Header />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
