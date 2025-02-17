import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Picturer AI",
  description: "AI-Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#FF6B00" } }}>
      <html lang="en" suppressHydrationWarning>
        <body className="font-inter">{children}</body>
      </html>
    </ClerkProvider>
  );
}
