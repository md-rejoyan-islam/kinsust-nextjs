// meta data
export const metadata = {
  metadataBase: new URL(process.env.SERVER_URL),
  title: "KIN Posts ",
  description: "KIN Posts Distribution",

  openGraph: {
    title: "KIN Posts",
    description: "KIN Posts Description",
    url: `${process.env.SERVER_URL}/posts`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/icon/icon.jpg",
        width: 800,
        height: 600,
        alt: "KIN Posts",
      },
      {
        url: "/icon/icon.jpg",
        width: 900,
        height: 800,
        alt: "KIN Posts",
      },

      { url: "/icon/icon.jpg" },
    ],
  },
  twitter: {
    title: "KIN Posts",
    description: "KIN Posts Description",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN Posts ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
