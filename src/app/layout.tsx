import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { cssVariables } from "@/config/design-tokens";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Next.js portfolio scaffold inspired by mojardinico.com",
  applicationName: "Portfolio"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0C0C"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html" style={cssVariables as CSSProperties}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
