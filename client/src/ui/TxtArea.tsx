import React from 'react';
import PropTypes from 'prop-types';

const TxtArea: React.FC<TxtAreaProps> = ({ id, className }: TxtAreaProps) => (
  <textarea className={className?.join(' ')} id={id}></textarea>
);

TxtArea.propTypes = {
  className: PropTypes.array,
  id: PropTypes.string.isRequired,
};

export default TxtArea;
