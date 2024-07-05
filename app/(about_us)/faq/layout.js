// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN FAQ",
  description:
    "Explore KIN's FAQ page for comprehensive answers about our mission, activities, and ways you can contribute to our voluntary organization.",

  openGraph: {
    title: "KIN FAQ",
    description:
      "Explore KIN's FAQ page for comprehensive answers about our mission, activities, and ways you can contribute to our voluntary organization.",
    url: `${process.env.SITE_URL}/faq`,
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
    description:
      " Explore KIN's FAQ page for comprehensive answers about our mission, activities, and ways you can contribute to our voluntary organization.",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN School ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
