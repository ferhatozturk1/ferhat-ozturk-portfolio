import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferhatozturk.dev"),
  title: "Ferhat Öztürk | Full Stack Developer & AI Enthusiast",
  description:
    "Personal portfolio of Ferhat Öztürk, Computer Engineering student focused on Full Stack Development, Artificial Intelligence, Deep Learning and Computer Vision.",
  openGraph: {
    title: "Ferhat Öztürk | Full Stack Developer & AI Enthusiast",
    description:
      "Personal portfolio of Ferhat Öztürk, Computer Engineering student focused on Full Stack Development, Artificial Intelligence, Deep Learning and Computer Vision.",
    type: "website",
    locale: "en_US",
    siteName: "Ferhat Öztürk Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferhat Öztürk | Full Stack Developer & AI Enthusiast",
    description:
      "Personal portfolio of Ferhat Öztürk, Computer Engineering student focused on Full Stack Development, Artificial Intelligence, Deep Learning and Computer Vision."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
