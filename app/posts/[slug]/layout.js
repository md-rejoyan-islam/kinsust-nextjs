export async function generateMetadata({ params }) {
  const ApiURL = process.env.SERVER_URL;
  const { post } = await getPost(params);
  return {
    metadataBase: new URL(process.env.SITE_URL),
    title: post.title,

    description: post?.banner?.split(" ").slice(0, 30).join(" "),

    openGraph: {
      title: post?.title,
      description: post?.banner?.split(" ").slice(0, 30).join(" "),
      url: `${process.env.SITE_URL}/posts/${params.slug}`,
      type: "website",
      siteName: "KIN,A Voluntary Organization",
      locale: "bn_BD",
      images: [
        {
          url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
          width: 850,
          height: 650,
          alt: post?.title,
        },
        {
          url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },

        {
          url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },

        { url: `${ApiURL}/public/images/posts/${post?.post_photo}` },
      ],
      type: "article",
      publishedTime: post?.date,
      section: "Blog",
      tag: post?.title,
      authors: "KIN,A Voluntary Organization",
    },
    twitter: {
      title: post?.title,
      description: post?.banner?.split(" ").slice(0, 30).join(" "),
      images: {
        url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
        alt: post?.title,
      },
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function layout({ children }) {
  return children;
}

async function getPost(params) {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/v1/posts/${params.slug}`,
    {
      withCredential: true,
    }
  );
  const response = await res.json();

  return { post: response.data };
}
