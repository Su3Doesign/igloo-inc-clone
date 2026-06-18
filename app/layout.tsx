import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igloo Inc. — Building the Largest Onchain Community",
  description:
    "Igloo Inc. is the parent company of Pudgy Penguins and OverpassIP, driving the consumer crypto revolution by building the largest onchain community.",
  keywords: [
    "Igloo Inc",
    "Pudgy Penguins",
    "OverpassIP",
    "Abstract Chain",
    "Web3",
    "crypto",
    "onchain community",
    "NFT",
  ],
  openGraph: {
    title: "Igloo Inc. — Building the Largest Onchain Community",
    description:
      "Parent company of Pudgy Penguins and OverpassIP. Driving the consumer crypto revolution.",
    url: "https://www.igloo.inc/",
    siteName: "Igloo Inc.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igloo Inc. — Building the Largest Onchain Community",
    description:
      "Parent company of Pudgy Penguins and OverpassIP. Driving the consumer crypto revolution.",
    creator: "@IglooInc",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.igloo.inc/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Igloo Inc.",
              url: "https://www.igloo.inc/",
              description:
                "Parent company of Pudgy Penguins and OverpassIP, driving the consumer crypto revolution.",
              sameAs: [
                "https://x.com/IglooInc",
                "https://www.linkedin.com/company/igloo-incorporated",
              ],
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "Pudgy Penguins",
                  url: "https://www.pudgypenguins.com/",
                },
                {
                  "@type": "Organization",
                  name: "OverpassIP",
                },
                {
                  "@type": "Organization",
                  name: "Abstract Chain",
                  url: "https://www.abs.xyz/",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
