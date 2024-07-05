import { SiteURL } from "@/components/api/Api";

// meta data
export const metadata = {
  metadataBase: new URL(SiteURL),
  title: "Account Recovery",
  description: "Account Recovery description",

  openGraph: {
    title: "Account Recovery",
    description: "KIN School Description",
    url: `${SiteURL}/find-account`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/icon/icon.jpg",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/icon/icon.jpg",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/icon/icon.jpg" },
    ],
  },
  twitter: {
    title: "KIN FAQ",
    description: " School Description",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN School ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
