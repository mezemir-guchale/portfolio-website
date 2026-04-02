import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mezemir Guchale | Data Scientist & Financial Risk Analyst",
  description:
    "Portfolio of Mezemir Neway Guchale — Finance professional with 12+ years of expertise, building data-driven solutions at the intersection of finance and machine learning.",
  keywords: ["Data Science", "Finance", "Risk Management", "Machine Learning", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
