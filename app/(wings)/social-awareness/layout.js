// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN Social Awareness",
  description:
    "Raising awareness through programs and protests. Join our mission for justice and a more aware society.",

  openGraph: {
    title: "KIN Social Awareness",
    url: `${process.env.SITE_URL}/social-awareness`,
    description:
      "KRaising awareness through programs and protests. Join our mission for justice and a more aware society.",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/social.webp",
        width: 100,
        height: 80,
        alt: "KIN Social Awareness",
      },
      {
        url: "/images/wings/social.webp",
        width: 900,
        height: 800,
        alt: "KIN Social Awareness",
      },

      { url: "/images/wings/social.webp" },
    ],
  },
  twitter: {
    title: "KIN Social Awareness",
    description:
      "Raising awareness through programs and protests. Join our mission for justice and a more aware society.",
    images: {
      url: "/images/wings/social.webp",
      alt: "KIN Social Awareness ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
