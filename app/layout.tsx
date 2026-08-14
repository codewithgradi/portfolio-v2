import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gradipuata.vercel.app"),
  title: "Gradi - Portfolio & Web Services",
  description: "Welcome to Gradi. Explore personal profiles and features.",
  openGraph: {
    title: "Gradi - Portfolio & Web Services",
    description: "Welcome to Gradi. Explore personal profiles and features.",
    url: "https://gradipuata.vercel.app",
    siteName: "Gradi",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Gradi Background Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradi - Portfolio & Web Services",
    description: "Welcome to Gradi. Explore personal profiles and features.",
    images: ["/background.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased overflow-x-hidden relative bg-black min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
