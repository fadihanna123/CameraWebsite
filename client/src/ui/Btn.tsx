import React from 'react';
import PropTypes from 'prop-types';

const Btn: React.FC<BtnProps> = ({
  className,
  clickFunc,
  children,
  disabled,
  btnStyle,
}: BtnProps) => (
  <button
    style={btnStyle}
    type='button'
    className={className?.join(' ')}
    disabled={disabled}
    onClick={clickFunc}
  >
    {children}
  </button>
);

Btn.propTypes = {
  btnStyle: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.array.isRequired,
  clickFunc: PropTypes.func,
};

export default Btn;
