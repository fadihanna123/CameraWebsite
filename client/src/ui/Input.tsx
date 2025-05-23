import React from 'react';

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  className,
  name,
  isRequired,
  acceptValues,
  autoComplete,
  placeHolder,
  defaultVal,
  register,
  style,
  maxLength,
}: InputProps) => {
  return (
    <input
      {...(register ? register(name) : {})}
      name={name}
      id={id}
      type={type}
      className={className?.join(' ')}
      required={isRequired}
      accept={acceptValues}
      autoComplete={autoComplete}
      placeholder={placeHolder}
      defaultValue={defaultVal}
      style={style}
      maxLength={maxLength}
    />
  );
};

export default Input;
