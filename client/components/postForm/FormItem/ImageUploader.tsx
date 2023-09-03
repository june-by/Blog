import React, { useCallback } from "react";
import { PostFormItemSharedType } from "./type";
import ImageUploader from "components/shared/ImageUploader/ImageUploader";

const PostFormImageUploader = <T extends Record<string, any>>({
  value,
  stateKey,
  setState,
}: PostFormItemSharedType<T>) => {
  const handleChangeImageUrlByInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev) => {
        return {
          ...prev,
          [stateKey]: e.target.value,
        };
      });
    },
    [setState, stateKey]
  );
  const onImageUploadeSuccess = useCallback(
    (imageUrl: string) => {
      setState((prev) => {
        return {
          ...prev,
          [stateKey]: imageUrl,
        };
      });
    },
    [setState, stateKey]
  );

  return (
    <ImageUploader>
      <div>
        <ImageUploader.ImageUrlInput
          placeholder="image url"
          value={value}
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
