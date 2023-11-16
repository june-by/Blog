import React, { useCallback, type ChangeEvent } from "react";
import ImageUploader from "@components/shared/ImageUploader/ImageUploader";

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
  const onImageUploadeSuccess = useCallback(
    (imageUrl: string) => {
      onChange(imageUrl);
    },
    [onChange]
  );

  return (
    <ImageUploader>
      <div>
        <ImageUploader.ImageUrlInput
          placeholder="image url"
          value={value ?? ""}
          onChange={handleChangeImageUrlByInput}
        />
        <ImageUploader.UploadButton
          onUploadeSuccess={onImageUploadeSuccess}
          text="썸네일 설정"
        />
      </div>
      <ImageUploader.Image
        src={value as string}
        alt="썸네일"
        width={300}
        height={200}
      />
    </ImageUploader>
  );
};

export default PostFormImageUploader;
