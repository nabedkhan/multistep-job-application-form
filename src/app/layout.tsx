import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import StoreProvider from "@/redux/store-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "CompileQ Multi-Step Form Assessment"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className="flex justify-center items-center min-h-screen p-4">
          <Toaster position="top-right" />
          <StoreProvider>{children}</StoreProvider>
        </main>
      </body>
    </html>
  );
}
