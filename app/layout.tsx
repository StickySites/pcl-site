import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLdRoot } from "@/components/seo/json-ld";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const defaultTitle = "Industrial contracting across the UK";
const defaultDescription =
  "PCL Limited delivers asbestos removal, demolition and strip-out, enabling works, refurbishments, and remediation for industrial and commercial clients.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultTitle,
    template: "%s | PCL Limited"
  },
  description: defaultDescription,
  applicationName: "PCL Limited",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "PCL Limited",
    title: `${defaultTitle} | PCL Limited`,
    description: defaultDescription,
    images: [{ url: "/photos/PCLWraps820x500.png", alt: "PCL Limited site works" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${defaultTitle} | PCL Limited`,
    description: defaultDescription,
    images: ["/photos/PCLWraps820x500.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={inter.variable}>
        <JsonLdRoot />
        {children}
      </body>
    </html>
  );
}
