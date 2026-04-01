import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "UX Patterns Docs",
  description: "A structured reference for implementing proven UX patterns in product design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-bg-primary text-text-primary font-sans">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
