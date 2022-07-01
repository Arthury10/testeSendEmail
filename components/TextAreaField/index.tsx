import styles from "./textArea.module.css";
import { useController } from "react-hook-form";

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
        name={name}
      ></textarea>
      <div className={styles.error}>{error && <p>{error.message}</p>}</div>
    </div>
  );
};
