import { useWriteContext } from "context/writeContext";
import React from "react";
import { customAxios } from "utils/CustomAxios";
import styles from "./@styles.module.scss";
import useSetDefaultThumbNail from "./useSetDefaultThumbNail";

const ThumbNailPicker = () => {
  const {
    writeFormData: { thumbNailUrl },
    setThumbNailUrl,
  } = useWriteContext();

  const isThumbNailExist = thumbNailUrl && thumbNailUrl !== "null";

  const onClickSetThumbNail = () => {
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
  };

  useSetDefaultThumbNail();
  return (
    <div className={styles.PickThumbNail}>
      <button onClick={onClickSetThumbNail}>썸네일 설정</button>
      {isThumbNailExist && <img src={thumbNailUrl} alt="썸네일" />}
    </div>
  );
};

export default ThumbNailPicker;

const thumbnailInputAttribute = [
  { attr: "data-testid", value: "thumbnailInput" },
  { attr: "type", value: "file" },
  { attr: "accept", value: "image/*" },
];
