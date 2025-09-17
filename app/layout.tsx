import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/page";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Report Crime Anonymously | Crime Watch",
  description: "A platform to report and combat crime in your community anonymously",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-black selection:bg-sky-500/20">
          {/* Gradient Background */}
          <div className="fixed inset-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
          </div>

          {/* Navbar (fixed) */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
            <Providers>{children}</Providers>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
