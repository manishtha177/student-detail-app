import styles from './common.module.css';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  handleOnClick?: () => void;
  customClassName?: string;
}

export const Button = ({
  label,
  type = 'button',
  handleOnClick,
  customClassName,
}: ButtonProps) => (
  <button
    type={type}
    className={`${styles.buttonWrapper} ${customClassName}`}
    onClick={handleOnClick}
  >
    {label}
  </button>
);
