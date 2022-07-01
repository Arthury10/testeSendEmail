import InputMask from "react-input-mask";
import { useController } from "react-hook-form";
import styles from "./input.module.css";

interface InputMaskFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  mask: string;
}

export const InputMaskField = ({
  name,
  label,
  isRequired,
  mask,
  placeholder,
  type,
}: InputMaskFieldProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <div className={styles.formgroup}>
      {label && (
        <label htmlFor={name}>
          {label} {isRequired && <span style={{ color: "#E05E5E" }}>*</span>}
        </label>
      )}
      <InputMask
        className={styles.forminput}
        mask={mask}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div className={styles.error}>{error && <p>{error.message}</p>}</div>
    </div>
  );
};
