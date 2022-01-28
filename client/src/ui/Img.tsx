import React from 'react';
import { ImgProps } from 'typings';

const Img: React.FC<ImgProps> = ({
  source,
  className,
  alt,
  ariaLabel,
  loading,
}: ImgProps) => {
  return (
    <img
      src={source}
      className={className}
      alt={alt}
      aria-label={ariaLabel}
      loading={loading}
    />
  );
};

export default Img;
