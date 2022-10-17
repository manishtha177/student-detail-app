import { ChangeEvent } from 'react';

interface RadioProps {
  label: string;
  value?: string;
  isChecked: boolean;
  name?: string;
  handleRadioClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  label,
  value,
  isChecked,
  name,
  handleRadioClick,
}: RadioProps) => (
  <div>
    <input
      type="radio"
      name={name}
      value={value}
      checked={isChecked}
      onChange={handleRadioClick}
    />
    <label>{label}</label>
  </div>
);
