// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN Programs",
  description: "KIN Programs Distribution",

  openGraph: {
    title: "KIN Programs",
    description: "KIN Programs Description",
    url: `${process.env.SITE_URL}/programs`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/icon/icon.jpg",
        width: 800,
        height: 600,
        alt: "KIN Programs",
      },
      {
        url: "/icon/icon.jpg",
        width: 900,
        height: 800,
        alt: "KIN Programs",
      },

      { url: "/icon/icon.jpg" },
    ],
  },
  twitter: {
    title: "KIN Programs",
    description: " KIN Programs Description",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN Programs Distribution ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
