import Image from "next/image";
import React from "react";

interface Props {
  webPSrc: string;
  fallbackSrc: string;
  alt: string;
}

const CustomWebPImage = ({ webPSrc, fallbackSrc, alt }: Props) => {
  return (
    <picture>
      <source data-srcset={webPSrc} type="image/webp" />
      <Image
        fill
        src={fallbackSrc}
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </picture>
  );
};

export default CustomWebPImage;

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";
