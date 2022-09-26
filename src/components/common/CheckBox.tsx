import { ChangeEvent } from "react";

import styles from "./common.module.css";

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  handleCheckBoxClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({
  label,
  isChecked,
  handleCheckBoxClick,
}: CheckBoxProps) => (
  <div className={styles.checkBoxWrapper}>
    <input type="checkbox" checked={isChecked} onChange={handleCheckBoxClick} />
    <label>{label}</label>
  </div>
);
