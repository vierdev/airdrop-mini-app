"use client";

import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Header from "@/components/header"
import { PAGES } from "@/config/const";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPath, setCurrentPath] = useState("");
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    PAGES.map((page: any, key: number) => {
      if(window.location.pathname == page.path) {
        if(!page.has_footer) {
          setIsHide(true)
        } 
      }
    })
  }, [])
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className={`w-full flex items-center justify-between p-3 footer ${isHide ? "hide":"flex"}`}>
              {
                PAGES.map((page: any, key: number) => 
                  page.show_menu?<Link
                    key={key}
                    href={page.path}
                    className={currentPath == page.path ? "text-lime-500": "text-white"}
                  >
                    {page.name}
                  </Link>:<></>
                )
              }
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
