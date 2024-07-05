import { Hind_Siliguri } from "next/font/google";

import "./globals.css";
import "./app.css";
import Footer from "../components/shared/footer/Footer";
import StoreProvider from "./StoreProvider";
import Header from "../components/shared/header/Header";
import ThemeWrapperProvider from "./ThemeProvider";
import Toastify from "@/components/Toastify";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "Home",
  description: "KIN,A Voluntary Organization",
  keywords: "kinsust, kin ,kin school,kin blood donation, sust",
  url: process.env.SITE_URL,
  image: "/images/logo.webp",
  type: "website",
  siteName: "KIN,A Voluntary Organization",
  locale: "bn_BD",
  facebook: {
    pages: "192895057402251",
    appID: "1438139603344595",
  },
  images: [
    {
      url: "/images/logo.webp",
      width: 800,
      height: 600,
      alt: "KIN Logo",
    },
    {
      url: "/images/logo.webp",
      width: 900,
      height: 800,
      alt: "KIN Logo",
    },
    { url: "/images/logo.webp" },
  ],

  twitter: {
    title: "KIN,A Voluntary Organization",
    description: "KIN,A Voluntary Organization",
    images: {
      url: "/images/logo.webp",
      alt: "KIN Logo",
    },
  },

  openGraph: {
    title: "KIN,A Voluntary Organization",
    description: "KIN,A Voluntary Organization",
    url: "https://kinbd.org",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 600,
        alt: "KIN Logo",
      },
      {
        url: "/images/logo.webp",
        width: 900,
        height: 800,
        alt: "KIN Logo",
      },
      { url: "/images/logo.webp" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-586W9N9C79"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-586W9N9C79');`}
        </Script>
      </head> */}
      <body className={hindSiliguri.className}>
        <ThemeWrapperProvider>
          <StoreProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toastify />
          </StoreProvider>
        </ThemeWrapperProvider>
        <GoogleTagManager gtmId="GTM-KJXX4NGM" />
        <GoogleAnalytics gaId="G-586W9N9C79" />
      </body>
    </html>
  );
}
