import { ChangeEvent } from "react";

interface InputProps {
  handleOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
  type?: string;
  className?: string;
}

export const Input = ({
  handleOnChange,
  value,
  name,
  type = "text",
  className = "",
}: InputProps) => (
  <input
    type={type}
    name={name}
    className={className}
    onChange={handleOnChange}
    value={value}
  />
);
