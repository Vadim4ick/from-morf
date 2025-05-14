import type { Metadata } from "next";

import { MainLayout } from "@/shared/layout/MainLayout";
import { Providers } from "@/shared/layout/Providers";

import "@/shared/styles/globals.css";
import "@/shared/styles/index.scss";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata: Metadata = {
  title: {
    default: "From Morf",
    template: "%s | From Morf",
  },
  description: Meta_SEO.description,
  icons: {
    icon: {
      url: "/favicon.ico",
      sizes: "32x32",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
