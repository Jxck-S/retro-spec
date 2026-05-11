import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const url = "https://rs.jackstech.net";

export const metadata: Metadata = {
  title: {
    default: "retro-spec",
    template: "%s | retro-spec",
  },
  description: "A personal history of the cars, phones, and laptops I've owned.",
  metadataBase: new URL(url),
  openGraph: {
    title: "retro-spec",
    description: "A personal history of the cars, phones, and laptops I've owned.",
    url,
    siteName: "retro-spec",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "retro-spec",
    description: "A personal history of the cars, phones, and laptops I've owned.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100 flex flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
