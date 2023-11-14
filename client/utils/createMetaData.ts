interface Params {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const createMetaData = ({
  title = "Byjuun.com",
  description = "Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻",
  ogTitle,
  ogDescription,
  ogImage = "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
  ogUrl = `https://byjuun.com`,
}: Params) => {
  return {
    title,
    description,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: ogUrl,
      images: [ogImage],
    },
  };
};

export default createMetaData;
