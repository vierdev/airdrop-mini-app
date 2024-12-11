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
      if (window.location.pathname == page.path) {
        if (!page.has_footer) {
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
          <div className="flex flex-col h-screen bg-[url('/background.png')] bg-no-repeat">
            <div className="flex justify-center items-center mt-20">
              <Header path={currentPath}/>
            </div>
            <main className="container mx-auto max-w-7xl pt-12 flex-grow">
              {children}
            </main>
            <div className="flex justify-center">
              <footer className={`w-[418px] h-[72px] bg-[#16161675] rounded-xl flex items-center justify-between p-3 footer ${isHide ? "hide" : "flex"}`}>
                {
                  PAGES.map((page: any, index: number) =>
                    page.show_menu ?
                      <Link
                        key={index}
                        href={page.path}
                      >
                        <div className={currentPath == page.path ? "text-[#D8FA06]" : "text-white"} onClick={() => setCurrentPath(page.path)}>{page.name}</div>
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
