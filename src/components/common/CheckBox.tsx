import { ChangeEvent } from "react";

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
  <div>
    <input type="checkbox" checked={isChecked} onChange={handleCheckBoxClick} />
    <label>{label}</label>
  </div>
);
