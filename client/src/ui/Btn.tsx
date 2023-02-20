import { BtnProps } from 'models';
import React from 'react';

const Btn: React.FC<BtnProps> = ({
  className,
  clickFunc,
  children,
  btnStyle,
}: BtnProps) => (
  <button
    style={btnStyle}
    type='button'
    className={className?.join(' ')}
    onClick={clickFunc}
  >
    {children}
  </button>
);

export default Btn;
