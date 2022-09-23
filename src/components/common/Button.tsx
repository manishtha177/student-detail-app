import styles from "./common.module.css";

interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  handleOnClick?: () => void;
}

export const Button = ({
  label,
  type = "button",
  handleOnClick,
}: ButtonProps) => (
  <button type={type} className={styles.buttonWrapper} onClick={handleOnClick}>
    {label}
  </button>
);
