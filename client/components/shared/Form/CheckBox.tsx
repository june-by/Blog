import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const CheckBox = forwardRef(
  ({ label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input type="checkbox" {...props} ref={ref} />
      </div>
    );
  }
);

export default CheckBox;
