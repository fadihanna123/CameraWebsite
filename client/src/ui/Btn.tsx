import React from 'react';

const Btn: React.FC<BtnProps> = ({
  className,
  clickFunc,
  children,
  disabled,
  btnStyle,
}: BtnProps) => (
  <button
    style={btnStyle}
    type='submit'
    className={className?.join(' ')}
    disabled={disabled}
    onClick={clickFunc}
  >
    {children}
  </button>
);

export default Btn;
