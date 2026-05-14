import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "PCL Limited | Industrial contracting",
    template: "%s | PCL Limited"
  },
  description:
    "PCL Limited provides professional industrial contracting, including asbestos removal, demolition, enabling works and structural alterations, refurbishments, and remediation."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
