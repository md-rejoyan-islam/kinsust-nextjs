// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "KIN School",
  description:
    "Nurturing underprivileged children through education, health programs, and moral development. You can join us in making a difference!",

  openGraph: {
    title: "KIN School",
    description:
      "Nurturing underprivileged children through education, health programs, and moral development. You can join us in making a difference!",
    url: `${process.env.SITE_URL}/kin-school`,
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/school.jpg",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/school.jpg",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/school.jpg" },
    ],
  },
  twitter: {
    title: "KIN School",
    description:
      "Nurturing underprivileged children through education, health programs, and moral development. You can join us in making a difference!",
    images: {
      url: "/images/wings/school.jpg",
      alt: "KIN School ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
