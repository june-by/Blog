import { useAddSeries } from "@hooks/query";
import DefaultModal from "@components/shared/DefaultModal";
import ImageUploader from "@components/shared/ImageUploader";
import ModalView from "@components/shared/ModalView/ModalView";
import { MESSAGE } from "@constants";
import React, {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { toast } from "react-toastify";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}
const { Header, Title, CloseButton, Form, Input, SubmitButton } = ModalView;

const SeriesFormModal = ({ isOpen, closeModal }: Props) => {
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

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      if (!titleRef.current || !shortDescriptionRef.current) {
        return;
      }
      e.preventDefault();

      mutate({
        title: titleRef.current.value,
        shortDescription: shortDescriptionRef.current.value,
        thumbNailUrl,
      });

      closeModal();
    },
    [closeModal, mutate, thumbNailUrl]
  );

  return (
    <DefaultModal isOpen={isOpen} closeModal={closeModal}>
      <ModalView>
        <Header>
          <Title title="시리즈 생성" />
          <CloseButton handleClose={closeModal} />
        </Header>
        <Form handleSubmit={handleSubmit}>
          <Input placeholder="제목" ref={titleRef} />
          <Input placeholder="짧은설명" ref={shortDescriptionRef} />
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
          <SubmitButton>생성</SubmitButton>
        </Form>
      </ModalView>
    </DefaultModal>
  );
};

export default SeriesFormModal;
