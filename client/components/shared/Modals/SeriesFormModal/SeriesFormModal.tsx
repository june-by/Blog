import { useAddSeries } from "@hooks/query";
import ImageUploader from "@components/shared/ImageUploader";
import ModalView from "@components/shared/ModalView/ModalView";
import { MESSAGE } from "@constants";
import React, {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  FormEventHandler,
} from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

interface Props {
  onClose: () => void;
}

const SeriesFormModal = ({ onClose }: Props) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const shortDescriptionRef = useRef<HTMLInputElement | null>(null);
  const [thumbNailUrl, setThumbNailUrl] = useState("");

  const { mutate } = useAddSeries({
    onSuccess: () => {
      console.log("called");
      toast.success(MESSAGE.ADD_SERIES_SUCCESS);
    },
  });

  const onImageUploadeSuccess = useCallback((imageUrl: string) => {
    setThumbNailUrl(imageUrl);
  }, []);

  const onChangeThumbUrl = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setThumbNailUrl(e.target.value);
  }, []);

  const onSubmit: FormEventHandler = useCallback(
    (e) => {
      if (!titleRef.current || !shortDescriptionRef.current) {
        return;
      }
      e.preventDefault();

      mutate({
        title: titleRef.current.value,
        shortDescription: shortDescriptionRef.current.value,
        thumbNailUrl,
      });

      onClose();
    },
    [mutate, onClose, thumbNailUrl]
  );

  return (
    <ModalView title="시리즈 생성" onClose={onClose}>
      <form className={styles.Form} onSubmit={onSubmit}>
        <input placeholder="제목" ref={titleRef} />
        <input placeholder="짧은설명" ref={shortDescriptionRef} />
        <ImageUploader>
          <div>
            <ImageUploader.ImageUrlInput
              placeholder="image url"
              onChange={onChangeThumbUrl}
              value={thumbNailUrl}
            />
            <ImageUploader.UploadButton
              text="썸네일 설정"
              onUploadeSuccess={onImageUploadeSuccess}
            />
          </div>
          <ImageUploader.Image
            src={thumbNailUrl}
            width={300}
            height={200}
            alt="썸네일"
          />
        </ImageUploader>
        <button>생성</button>
      </form>
    </ModalView>
  );
};

export default SeriesFormModal;
