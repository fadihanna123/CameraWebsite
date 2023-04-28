import { InputProps } from 'models';
import React from 'react';
import propTypes from 'prop-types';

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
  />
);

Input.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string,
  className: propTypes.array,
  name: propTypes.string,
  val: propTypes.string,
  isRequired: propTypes.bool,
  changeFunc: propTypes.func,
  acceptValues: propTypes.string,
  autoComplete: propTypes.string,
};

export default Input;
