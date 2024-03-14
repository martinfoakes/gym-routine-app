import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout Routine Walkthroughs",
  description: "",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [{ name: "Martin Foakes" }],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/app-icon-x128.png" },
    { rel: "icon", url: "/icons/app-icon-x128.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewportFit: "cover",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <Head>
      <meta name="application-name" content="Workout Routine Walkthroughs" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Workouts App" />
      <meta name="description" content="" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <link rel="apple-touch-icon" href="/icons/app-icon-x128.png" />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/app-icon-x256.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Workout Routine Walkthroughs" />
      <meta property="og:description" content="" />
      <meta property="og:site_name" content="Workouts App" />
      <meta property="og:url" content="https://gym-routine-app.vercel.app" />
      <meta
        property="og:image"
        content="https://gym-routine-app.vercel.app/icons/app-icon-x128.png"
      />
    </Head>
    <body className={inter.className}>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
