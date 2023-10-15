import React from 'react';
import PropTypes from 'prop-types';

const Para: React.FC<ParaProps> = ({ className, children }: ParaProps) => (
  <p className={className?.join(' ')}>{children}</p>
);

Para.propTypes = {
  className: PropTypes.array,
  children: PropTypes.any.isRequired,
};

export default Para;
