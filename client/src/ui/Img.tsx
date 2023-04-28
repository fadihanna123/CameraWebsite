import { ImgProps } from 'models';
import React from 'react';
import PropTypes from 'prop-types';

const Img: React.FC<ImgProps> = ({
  source,
  className,
  alt,
  ariaLabel,
  loading,
  dimensions,
}: ImgProps) => (
  <img
    src={source}
    className={className?.join(' ')}
    alt={alt}
    aria-label={ariaLabel}
    loading={loading}
    width={dimensions[0]}
    height={dimensions[1]}
  />
);

Img.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  dimensions: PropTypes.array.isRequired,
};

export default Img;
