// meta data
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: "Our History",
  description:
    'KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.',

  openGraph: {
    title: "Our History",
    description:
      'KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.',
    url: `${process.env.SITE_URL}/our-history`,
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
    title: "Our History",
    description:
      'KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.',
    images: {
      url: "/images/history/hand.webp",
      alt: "KIN School ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
