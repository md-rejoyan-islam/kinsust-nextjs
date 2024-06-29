// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN Charity & Aid",
  description:
    "Making a difference through events like Charity Film Fest, Poster, T-shirt, and more. Join us in our mission of giving back.",

  openGraph: {
    title: "KIN Charity & Aid",
    description:
      "Making a difference through events like Charity Film Fest, Poster, T-shirt, and more. Join us in our mission of giving back.",
    url: `${process.env.SITE_URL}/charity&aid`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/charity.webp",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/charity.webp",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/charity.webp" },
    ],
  },
  twitter: {
    title: "KIN Charity & Aid",
    description:
      "Making a difference through events like Charity Film Fest, Poster, T-shirt, and more. Join us in our mission of giving back.",
    images: {
      url: "/images/wings/charity.webp",
      alt: "KIN Charity & Aid",
    },
  },
};

export default function layout({ children }) {
  return children;
}
