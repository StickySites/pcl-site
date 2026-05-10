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
    "PCL Limited — professional industrial contractors: asbestos removal, demolition, enabling works, commercial refurbishments, and specialist decontamination."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
