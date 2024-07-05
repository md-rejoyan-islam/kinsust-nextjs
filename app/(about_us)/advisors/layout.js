const SiteURL = process.env.SITE_URL;

// meta data
export const metadata = {
  metadataBase: new URL(SiteURL),
  title: "KIN Advisors",
  description:
    "Meet the KIN Advisor Panel - Guiding our mission with expertise and wisdom. Learn about our esteemed advisors driving positive change.",

  openGraph: {
    title: "KIN Advisors",
    description:
      "Meet the KIN Advisor Panel - Guiding our mission with expertise and wisdom. Learn about our esteemed advisors driving positive change.",
    url: `${SiteURL}/advisors`,
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
    title: "KIN Advisors",
    description:
      "Meet the KIN Advisor Panel - Guiding our mission with expertise and wisdom. Learn about our esteemed advisors driving positive change.",
    images: {
      url: "/icon/icon.jpg",
      alt: "KIN LOGO ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
