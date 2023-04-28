import { BtnProps } from 'models';
import React from 'react';
import PropTypes from 'prop-types';

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

Btn.propTypes = {
  btnStyle: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.array.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default Btn;
