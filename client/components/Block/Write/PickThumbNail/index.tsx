import React, { useCallback } from "react";
import { customAxios } from "utils/CustomAxios";
import styles from "./styles.module.scss";

interface Props {
  thumbNailUrl: string | null;
  setThumbNailUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export const thumbnailInputAttribute = [
  { attr: "data-testid", value: "thumbnailInput" },
  { attr: "type", value: "file" },
  { attr: "accept", value: "image/*" },
];

const PickThumbNail = ({ thumbNailUrl, setThumbNailUrl }: Props) => {
  const onClickSetThumbNail = useCallback(() => {
    const input = document.createElement("input");
    thumbnailInputAttribute.forEach(({ attr, value }) => {
      input.setAttribute(attr, value);
    });
    document.body.appendChild(input);
    input.click();
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        const formData = new FormData();
        formData.append("img", file[0]);
        const res = await customAxios.post("/uploads", formData);
        setThumbNailUrl(res.data.url);
      }
    };
  }, [setThumbNailUrl]);
  return (
    <div className={styles.PickThumbNail}>
      <button onClick={onClickSetThumbNail}>썸네일 설정</button>
      {thumbNailUrl && thumbNailUrl !== "null" && (
        <img src={thumbNailUrl} alt="썸네일" />
      )}
    </div>
  );
};

export default PickThumbNail;
