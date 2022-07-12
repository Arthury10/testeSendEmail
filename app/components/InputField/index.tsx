import React from "react";
import { useController } from "react-hook-form";
import styles from "./input.module.css";

interface InputFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
}

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  isRequired,
}: InputFieldProps) => {
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
      <input
        type={type}
        className={styles.forminput}
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
