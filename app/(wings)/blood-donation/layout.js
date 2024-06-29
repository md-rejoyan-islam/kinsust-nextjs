// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN Blood",
  description:
    "A lifeline through efficient blood management and donation. Join us in safeguarding lives and securing a sustainable blood supply.",

  openGraph: {
    title: "KIN Blood",
    description:
      "A lifeline through efficient blood management and donation. Join us in safeguarding lives and securing a sustainable blood supply.",
    url: `${process.env.SITE_URL}/blood-donation`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/blood.jpg",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/blood.jpg",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/blood.jpg" },
    ],
  },
  twitter: {
    title: "KIN Blood Donation",
    description:
      "A lifeline through efficient blood management and donation. Join us in safeguarding lives and securing a sustainable blood supply.",
    images: {
      url: "/images/wings/blood.jpg",
      alt: "KIN Blood ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
