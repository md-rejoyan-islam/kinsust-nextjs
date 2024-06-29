// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN Winter Cloth Distribution ",
  description:
    "Bringing warmth and smiles to the less fortunate during the cold season. Join us in making a difference.",

  openGraph: {
    title: "KIN Winter Cloth Distribution",
    description:
      "Bringing warmth and smiles to the less fortunate during the cold season. Join us in making a difference.",
    url: `${process.env.SITE_URL}/wings/winter-cloth-distribution`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/winter.webp",
        width: 800,
        height: 600,
        alt: "KIN Winter Cloth Distribution",
      },
      {
        url: "/images/wings/winter.webp",
        width: 900,
        height: 800,
        alt: "KIN Winter Cloth Distribution",
      },

      { url: "/images/wings/winter.webp" },
    ],
  },
  twitter: {
    title: "KIN Winter Cloth Distribution",
    description:
      "Bringing warmth and smiles to the less fortunate during the cold season. Join us in making a difference.",
    images: {
      url: "/images/wings/winter.webp",
      alt: "KIN Winter Cloth Distribution ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
