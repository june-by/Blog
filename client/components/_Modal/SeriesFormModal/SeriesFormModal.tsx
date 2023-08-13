import { useAddSeries } from "Hooks/Series";
import DefaultModal from "components/shared/DefaultModal";
import ModalView from "components/shared/ModalView/ModalView";
import React, { useCallback, useRef } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}
const { Header, Title, CloseButton, Form, Input, SubmitButton } = ModalView;

const SeriesFormModal = ({ isOpen, closeModal }: Props) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const shortDescriptionRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useAddSeries({
    onSuccess: () => {
      alert("성공");
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (!titleRef.current || !shortDescriptionRef.current) return;
      e.preventDefault();

      mutate({
        title: titleRef.current.value,
        shortDescription: shortDescriptionRef.current.value,
        thumbNailUrl: "",
      });

      closeModal();
    },
    [closeModal, mutate]
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
          <SubmitButton>생성</SubmitButton>
        </Form>
      </ModalView>
    </DefaultModal>
  );
};

export default SeriesFormModal;
