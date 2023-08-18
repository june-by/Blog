import { useWriteContext } from "context/writeContext";
import React, { useCallback } from "react";
import useSetDefaultThumbNail from "./useSetDefaultThumbNail";
import ImageUploader from "components/shared/ImageUploader/ImageUploader";

const ThumbNailPicker = () => {
  const {
    writeFormData: { thumbNailUrl },
    setThumbNailUrl,
  } = useWriteContext();

  const onImageUploadeSuccess = useCallback(
    (imageUrl: string) => {
      setThumbNailUrl(imageUrl);
    },
    [setThumbNailUrl]
  );

  useSetDefaultThumbNail();

  return (
    <ImageUploader>
      <ImageUploader.UploadButton
        onUploadeSuccess={onImageUploadeSuccess}
        text="썸네일 설정"
      />
      <ImageUploader.Image
        src={thumbNailUrl as string}
        alt="썸네일"
        width={300}
        height={200}
      />
    </ImageUploader>
  );
};

export default ThumbNailPicker;
