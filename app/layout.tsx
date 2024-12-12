"use client";

import "@/styles/globals.css";
import { Link, useLink } from "@nextui-org/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Header from "@/components/header"
import { PAGES } from "@/config/const";
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPath, setCurrentPath] = useState("");
  const [isHide, setIsHide] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    setCurrentPath(pathname);
    let is_hide = false;
    PAGES.map((page: any, key: number) => {
      if (pathname == page.path) {
        if (!page.has_footer) {
          is_hide = true;
        }
      }
    })
    setIsHide(is_hide);
  }, [pathname])
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
          <div className="flex flex-col h-screen bg-[url('/background.png')] bg-no-repeat">
            <div className="flex justify-center items-center mt-14">
              <Header path={currentPath}/>
            </div>
            <main className="container mx-auto max-w-7xl pt-12 flex-grow justify-center items-center">
              {children}
            </main>
            <div className="flex justify-center items-center">
              <footer className={`w-[418px] h-[72px] bg-[#16161675] rounded-xl flex items-center justify-between p-3 footer ${isHide ? "hide" : "flex"}`}>
                {
                  PAGES.map((page: any, index: number) =>
                    page.show_menu ?
                      <Link
                        key={index}
                        href={page.path}
                      >
                        <button className={currentPath == page.path ? "text-[#D8FA06]" : "text-white"} onClick={() => setCurrentPath(page.path)}>{page.name}</button>
                      </Link> : null
                  )
                }
              </footer>
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}
