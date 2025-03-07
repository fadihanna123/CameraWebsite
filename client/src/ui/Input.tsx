import React from 'react';

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  className,
  name,
  val,
  isRequired,
  acceptValues,
  autoComplete,
  placeHolder,
  defaultVal,
  register,
}: InputProps) => {
  return (
    <input
      {...(register ? register(name) : {})}
      name={name}
      id={id}
      type={type}
      className={className?.join(' ')}
      value={val}
      required={isRequired}
      accept={acceptValues}
      autoComplete={autoComplete}
      placeholder={placeHolder}
      defaultValue={defaultVal}
    />
  );
};

export default Input;
