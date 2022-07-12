import React from "react";
import styles from "./input.module.css";

interface InputFieldProps {
  name: string;
  error?: string;
  onChange?: () => void;
}

export const CheckBox = ({ name, onChange, error }: InputFieldProps) => {

  return (
    <div className={styles.formgroup}>
      <input
        type="checkbox"
        id={name}
        className={styles.checkbox}
        name={name}
        onChange={onChange}
      />
      <div className={styles.error}>{error && <p>{error}</p>}</div>
    </div>
  );
};
