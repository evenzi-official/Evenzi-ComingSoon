import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evenzi — Capture · Share · Cherish",
  description:
    "Evenzi is the digital platform to capture, share and cherish your most precious event memories. Join the waitlist — launching soon.",
  authors: [{ name: "Evenzi" }],
  openGraph: {
    title: "Evenzi — Capture · Share · Cherish",
    description:
      "Capture every moment, share instantly, cherish forever. The digital home for your event memories.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
