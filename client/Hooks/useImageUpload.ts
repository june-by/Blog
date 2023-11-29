import { ServerURL } from "@constants";
import { useCallback, useState } from "react";

interface UploadImgResponse {
  url: string;
  uploaded: boolean;
}

interface Params {
  onImageUploadSuccess?: (params: UploadImgResponse) => void;
}

const useImageUpload = (params?: Params) => {
  const [uploadedImgSrc, setUploadedImgSrc] = useState<string | null>(null);

  const handleClickUploadButton = useCallback(() => {
    const inputElem = createInputElement();

    document.body.appendChild(inputElem);

    inputElem.click();

    inputElem.onchange = async () => {
      const file = inputElem.files;

      if (!file) {
        return;
      }

      const { url, uploaded } = await uploadImg(file[0]);
      params?.onImageUploadSuccess?.({ url, uploaded });
      setUploadedImgSrc(url);
      document.body.removeChild(inputElem);
    };
  }, [params]);

  return { uploadedImgSrc, setUploadedImgSrc, handleClickUploadButton };
};

const uploadImg = async (img: File) => {
  const formData = new FormData();
  formData.append("img", img);

  const response = await fetch(`${ServerURL}/uploads`, {
    method: "post",
    body: formData,
  });

  return (await response.json()) as UploadImgResponse;
};

const createInputElement = () => {
  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", "file");
  inputElem.setAttribute("accept", "image/*");
  inputElem.style.display = "none";
  document.body.appendChild(inputElem);
  return inputElem;
};

export default useImageUpload;
