import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import { customAxios } from "utils/CustomAxios";
import Image from "next/image";
import isNull from "utils/isNull";

interface UploadButtonProps {
  onUploadeSuccess: (imageUrl: string) => void;
  text: string;
}

const UploadButton = ({ onUploadeSuccess, text }: UploadButtonProps) => {
  const handleClick = () => {
    const inputElem = document.createElement("input");
    INPUT_ATTRIBUTE.forEach(({ attr, value }) => {
      inputElem.setAttribute(attr, value);
    });
    document.body.appendChild(inputElem);
    inputElem.click();
    inputElem.onchange = async () => {
      const file = inputElem.files;
      if (!file) return;

      const formData = new FormData();
      formData.append("img", file[0]);
      const res = await customAxios.post("/uploads", formData);
      onUploadeSuccess(res.data.url);
      document.body.removeChild(inputElem);
    };
  };

  return <button onClick={handleClick}>{text}</button>;
};

const UploadedImage = (props: React.ComponentProps<typeof Image>) => {
  if (isNull(props.src as string)) return null;
  return <Image {...props} alt="uploadedImage" />;
};

const ImageUploader = Object.assign(
  ({ children }: { children: ReactNode }) => (
    <div className={styles.ImageUploader}> {children}</div>
  ),
  {
    UploadButton,
    Image: UploadedImage,
  }
);

export default ImageUploader;

const INPUT_ATTRIBUTE = [
  { attr: "type", value: "file" },
  { attr: "accept", value: "image/*" },
];
