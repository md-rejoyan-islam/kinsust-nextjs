  const Links = [
  {
    href: "/",
    label: "Home",
  },
  {
    label: "About US",
    child: [
      {
        href: "/our-history",
        label: "Our History",
      },
      {
        href: "/executive-committee",
        label: "Executive Committee",
      },
      {
        href: "/advisors",
        label: "Advisors",
      },
      {
        href: "/faq",
        label: "FAQ",
      },
    ],
  },
  {
    label: "Wings",
    child: [
      {
        href: "/kin-school",
        label: "KIN School",
      },
      {
        href: "/blood-donation",
        label: "Blood Donation",
      },
      {
        href: "/social-awareness",
        label: "Social Awareness",
      },
      {
        href: "/charity&aid",
        label: "Charity & Aid",
      },
      {
        href: "/winter-cloth-distribution",
        label: "Winter Cloth Distribution",
      },
    ],
  },
  {
    href: "/posts",
    label: "Blog",
  },
  {
    href: "/programs",
    label: "Programs",
  },
  {
    href: "/profile",
    label: "Profile",
    access: "private",
  },
  {
    href: " ",
    label: "Sign Out",
    access: "private",
  },
  {
    href: "/login",
    label: "Login",
    access: "public",
  },
];

export default Links;
