import React from 'react';
import { ImgProps } from 'typings';

const Img: React.FC<ImgProps> = ({
  source,
  className,
  alt,
  ariaLabel,
  loading,
  dimensions,
}: ImgProps) => {
  return (
    <img
      src={source}
      className={className?.join(" ")}
      alt={alt}
      aria-label={ariaLabel}
      loading={loading}
      width={dimensions[0]}
      height={dimensions[1]}
    />
  );
};

export default Img;
