import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartHaven",
  description: "SmartHaven – Make your life easy with smart products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
