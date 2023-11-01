import React, { useRef, type FormEvent } from "react";
import { PostFormItemSharedType } from "./type";
import styles from "./styles.module.scss";
const ListForm = <T extends Record<string, any>>({
  stateKey,
  value,
  setState,
  label,
}: PostFormItemSharedType<T>) => {
  const formInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitListItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formInputRef.current) return;
    setState((prev) => {
      const item = formInputRef.current!.value;
      formInputRef.current!.value = "";
      return {
        ...prev,
        [stateKey]: [...prev[stateKey], item],
      };
    });
  };

  const handleClickItemDeleteButton =
    (delTargetItem: T[typeof stateKey]) => () => {
      setState((prev) => {
        const prevItems = prev[stateKey] as T[typeof stateKey][];
        return {
          ...prev,
          [stateKey]: prevItems.filter((item) => item !== delTargetItem),
        };
      });
    };

  return (
    <div className={styles.DivWithLabel}>
      {label && <label>{label}</label>}
      <div className={styles.ListForm}>
        <form onSubmit={handleSubmitListItem}>
          <input ref={formInputRef} className={styles.ListFormInput} />
        </form>
        <div className={styles.ListFormItems}>
          {value.map((item: T[typeof stateKey]) => (
            <div key={item}>
              <span>{item}</span>
              <button onClick={handleClickItemDeleteButton(item)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListForm;
