import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Knowledge26Widget from "@/components/widgets/Knowledge26Widget";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AscendWorksNow | ServiceNow Implementation & Enterprise IT Transformation",
  description:
    "AscendWorksNow helps enterprise IT leaders transform their organizations through ServiceNow implementation, Agentic AI, and strategic consulting. Deployed in 6 weeks. Results that last.",
  keywords: [
    "ServiceNow implementation",
    "enterprise IT consulting",
    "ServiceNow partner",
    "IT transformation",
    "Agentic AI",
    "ITSM",
    "AscendWorksNow",
  ],
  metadataBase: new URL("https://www.ascendworksnow.com"),
  openGraph: {
    title: "AscendWorksNow | ServiceNow & Enterprise IT Transformation",
    description:
      "From cost center to innovation engine. AscendWorksNow delivers ServiceNow implementations that transform how enterprise IT operates.",
    siteName: "AscendWorksNow",
    url: "https://www.ascendworksnow.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ascendworksnow.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Knowledge26Widget />
      </body>
    </html>
  );
}
