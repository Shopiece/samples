import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shopiece Authenticate",
  description: "This is a sample for obtaining an authentication token for shopiece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} min-h-screen p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://shopiece.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/rabbit.svg"
                alt="Shopiece Rabbit"
                className="dark:invert"
                width={80}
                height={24}
                priority
              />
              <Image
                src="/images/logo.svg"
                alt="Shopiece logo"
                className="dark:invert"
                width={200}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        {children}
        <footer className="w-full mt-20 relative text-center">Copyright <a href="https://www.shopiece.io/" title="Simple & Easy Headless CMS | Shopiece">Shopiece</a></footer>
      </body>
    </html>
  );
}
