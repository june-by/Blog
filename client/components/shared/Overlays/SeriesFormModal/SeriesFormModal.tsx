import { useAddSeries } from "@hooks/query";
import ModalView from "@components/shared/ModalView/ModalView";
import { MESSAGE } from "@constants";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { revalidateSeries } from "@utils";
import { Input, ImageUploader, Button } from "@components/shared/Form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
}

const SeriesFormModal = ({ onClose }: Props) => {
  const { register, handleSubmit, control } =
    useForm<Parameters<typeof mutate>[0]>();

  const { mutate } = useAddSeries({
    onSuccess: () => {
      toast.success(MESSAGE.ADD_SERIES_SUCCESS);
    },
  });

  const onSubmit: SubmitHandler<Parameters<typeof mutate>[0]> = useCallback(
    ({ title, shortDescription, thumbNailUrl }) => {
      mutate({
        title,
        shortDescription,
        thumbNailUrl,
      });

      revalidateSeries();
      onClose();
    },
    [mutate, onClose]
  );

  return (
    <ModalView title="시리즈 생성" onClose={onClose}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="제목" {...register("title")} />
        <Input placeholder="짧은설명" {...register("shortDescription")} />
        <Controller
          name="thumbNailUrl"
          control={control}
          render={({ field }) => (
            <ImageUploader
              value={field.value}
              onChange={(imgUrl: string) => field.onChange(imgUrl)}
            />
          )}
        />
        <Button>생성</Button>
      </form>
    </ModalView>
  );
};

export default SeriesFormModal;
