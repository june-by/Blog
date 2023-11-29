import React, { useCallback, type ChangeEvent } from "react";
import useImageUpload from "@hooks/useImageUpload";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  value?: string | null;
  onChange: (imgUrl: string) => void;
}

const PostFormImageUploader = ({ value, onChange }: Props) => {
  const handleChangeImageUrlByInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const onImageUploadSuccess = useCallback(
    ({ url }: { url: string }) => {
      onChange(url);
    },
    [onChange]
  );

  const { handleClickUploadButton } = useImageUpload({ onImageUploadSuccess });

  return (
    <div className={styles.ImageUploader}>
      <div>
        <input
          placeholder="image url"
          value={value ?? ""}
          onChange={handleChangeImageUrlByInput}
        />
        <button type="button" onClick={handleClickUploadButton}>
          썸네일 설정
        </button>
      </div>
      {value && <Image src={value} alt="썸네일" width={300} height={200} />}
    </div>
  );
};

export default PostFormImageUploader;
