import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef(
  ({ label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input {...props} ref={ref} />
      </div>
    );
  }
);

export default Input;
