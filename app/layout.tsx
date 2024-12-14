"use client";

import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "h-screen w-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
        style={{backgroundImage: "url('/background.png')"}}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html >
  );
}
