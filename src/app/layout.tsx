import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.scss";
import GlobalStyles from "@mui/material/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Gym Routine App",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>
      <AppRouterCacheProvider>
        <GlobalStyles
          styles={{
            h1: {
              fontSize: 38,
            },
            h2: {
              fontSize: 30,
            },
            button: {
              fontStyle: "italic",
            },
          }}
        />
        {children}
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
