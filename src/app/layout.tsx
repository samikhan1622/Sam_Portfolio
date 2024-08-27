import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import StairTransitions from "@/components/StairTransitions";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

export const metadata = {
  title: "Mr_$am",
  description: "Generated by Sami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransitions />
        <PageTransitions>{children}</PageTransitions>
      </body>
    </html>
  );
}