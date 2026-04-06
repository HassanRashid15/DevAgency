import type { Metadata } from "next";
import { AppProviders } from "@/App";
import "@/index.css";

export const metadata: Metadata = {
  title: "DevStitch — Custom Web & Ecommerce Solutions",
  description:
    "DevStitch is an emerging custom software development company specializing in delivering comprehensive enterprise solutions. AI-driven web and mobile app development since 2022.",
  authors: [{ name: "DevStitch" }],
  openGraph: {
    type: "website",
    title: "DevStitch — Custom Web & Ecommerce Solutions",
    description:
      "DevStitch delivers enterprise-grade web, AI, mobile, and ecommerce solutions for startups and corporations.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8263c0ec-26ad-4fd9-b5fd-7d2720c26965/id-preview-098313a3--539e1f25-04d4-4097-937c-24ae88a7d7a6.lovable.app-1775218875486.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "DevStitch — Custom Web & Ecommerce Solutions",
    description:
      "DevStitch delivers enterprise-grade web, AI, mobile, and ecommerce solutions for startups and corporations.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8263c0ec-26ad-4fd9-b5fd-7d2720c26965/id-preview-098313a3--539e1f25-04d4-4097-937c-24ae88a7d7a6.lovable.app-1775218875486.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
