import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ViewportProvider } from "./hooks/useViewport";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahl Arqueza | Welcome to my space!",
  description: "Website built and designed by Ahl Arqueza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ViewportProvider>{children}</ViewportProvider>
      </body>
    </html>
  );
}
