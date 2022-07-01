import { useController } from "react-hook-form";
import styles from "./input.module.css";

interface InputFieldProps {
  name: string;
  error?: string;
}

export const CheckBox = ({ name }: InputFieldProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
  });
  return (
    <div className={styles.formgroup}>
      <input
        type="checkbox"
        id={name}
        className={styles.checkbox}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div className={styles.error}>{error && <p>{error.message}</p>}</div>
    </div>
  );
};
