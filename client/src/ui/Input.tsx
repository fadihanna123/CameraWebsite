import React from 'react';

const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  name,
  val,
  isRequired,
  changeFunc,
  acceptValues,
  autoComplete,
  placeHolder,
}: InputProps) => (
  <input
    id={id}
    type={type}
    className={className?.join(' ')}
    name={name}
    onChange={changeFunc}
    value={val}
    required={isRequired}
    accept={acceptValues}
    autoComplete={autoComplete}
    placeholder={placeHolder}
  />
);

export default Input;
