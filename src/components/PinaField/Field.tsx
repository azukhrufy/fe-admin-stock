import React from "react";

interface FieldProps {
  name: string;
  label?: string;
  defaultValue: number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  onChangeValue?: (e : any) => void;
}

const Field = ({
  name,
  label,
  defaultValue,
  prefixIcon,
  suffixIcon,
  onClickPrefix,
  onClickSuffix,
  onChangeValue,
}: FieldProps) => {

  return (
    <div className={`pina-input-field`}>
      <label>{label}</label>
      <div className={`input-box`}>
        <div className="icon-btn" onClick={onClickPrefix}>
          {prefixIcon}
        </div>
        <input
          name={name}
          value={defaultValue}
          onChange={onChangeValue}
          min={1}
          pattern="[0-9]{1,5}"
        />
        <div className="icon-btn" onClick={onClickSuffix}>
          {suffixIcon}
        </div>
      </div>
    </div>
  );
};

export default Field;
