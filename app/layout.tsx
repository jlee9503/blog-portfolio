import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jung Lee - Turn Data Into Meaningful Insights",
  description:
    "Portfolio website for showcasing my projects in web development and data analytics.",
  keywords:
    "Web Development, Data Analytics, Data Science, Machine Learning, Portfolio",
  authors: [{ name: "Jung Lee" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased`}>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
