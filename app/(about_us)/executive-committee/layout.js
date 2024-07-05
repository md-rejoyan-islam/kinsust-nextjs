const SiteURL = process.env.SERVER_URL;
// meta data
export const metadata = {
  metadataBase: new URL(SiteURL),
  title: "KIN Executive Committee",
  description:
    "Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",

  openGraph: {
    title: "KIN Executive Committee",
    description:
      "Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",
    url: `${SiteURL}/executive-committee`,
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
    title: "KIN Executive Committee",
    description:
      " Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN Executive Committee ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
