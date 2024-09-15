import { Hind_Siliguri } from "next/font/google";

import "./globals.css";
import "./app.css";
import Footer from "../components/shared/footer/Footer";
import StoreProvider from "./StoreProvider";
import Header from "../components/shared/header/Header";
import ThemeWrapperProvider from "./ThemeProvider";
import Toastify from "@/components/Toastify";
import Script from "next/script";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "Home",
  description: `KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,
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
    description: `KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,
    images: {
      url: "/images/logo.webp",
      alt: "KIN Logo",
    },
  },

  openGraph: {
    title: "KIN,A Voluntary Organization",
    description: `KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JWPF6NH2QT"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JWPF6NH2QT')
            `}
        </Script>
      </head>
      <body className={hindSiliguri.className}>
        <ThemeWrapperProvider>
          <StoreProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toastify />
          </StoreProvider>
        </ThemeWrapperProvider>
        {/* <GoogleTagManager gtmId="GTM-KJXX4NGM" />
        <GoogleAnalytics gaId="G-586W9N9C79" /> */}
      </body>
    </html>
  );
}
