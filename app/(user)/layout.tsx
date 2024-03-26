import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import {Suspense} from "react";
import Loading from "@/app/(user)/loading";
import {inter,suwannaphum, localCustomFont} from "@/app/(user)/fonts";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}>
      <NavbarComponent/>
      <Suspense fallback={<Loading/>}>{children}</Suspense>
      </body>
    </html>
  );
}