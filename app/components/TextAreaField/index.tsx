import styles from "./textArea.module.css";
import { useController } from "react-hook-form";
import React from "react";

interface TextAreaFieldProps {
  name: string;
}

export const TextAreaField = ({ name }: TextAreaFieldProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <div className={styles.formtextarea}>
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        placeholder="Escreva aqui o que deseja saber sobre o plano DS Saúde"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      ></textarea>
      <div className={styles.error}>{error && <p>{error.message}</p>}</div>
    </div>
  );
};
