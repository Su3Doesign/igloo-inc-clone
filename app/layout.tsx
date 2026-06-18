import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igloo Inc.",
  description:
    "Our mission is to create the largest onchain community, driving the consumer crypto revolution.",
  openGraph: {
    title: "Igloo Inc.",
    description:
      "Our mission is to create the largest onchain community, driving the consumer crypto revolution.",
    url: "https://www.igloo.inc/",
    siteName: "Igloo Inc.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igloo Inc.",
    description:
      "Our mission is to create the largest onchain community, driving the consumer crypto revolution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
                "Our mission is to create the largest onchain community, driving the consumer crypto revolution.",
              sameAs: [
                "https://twitter.com/iglooinc",
                "https://www.linkedin.com/company/igloo-incorporated",
                "https://medium.com/@iglooinc",
              ],
            }),
          }}
        />
      </head>
      <body style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
