import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "AscendWorks | ServiceNow Implementation & Enterprise IT Transformation",
  description:
    "AscendWorks helps enterprise IT leaders transform their organizations through ServiceNow implementation, Agentic AI, and strategic consulting. Deployed in 6 weeks. Results that last.",
  keywords: [
    "ServiceNow implementation",
    "enterprise IT consulting",
    "ServiceNow partner",
    "IT transformation",
    "Agentic AI",
    "ITSM",
    "AscendWorks",
  ],
  openGraph: {
    title: "AscendWorks | ServiceNow & Enterprise IT Transformation",
    description:
      "From cost center to innovation engine. AscendWorks delivers ServiceNow implementations that transform how enterprise IT operates.",
    siteName: "AscendWorks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
