import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${inter.variable} antialiased layout`}>{children}</section>
  );
}
