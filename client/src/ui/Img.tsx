import { ImgProps } from 'models';
import React from 'react';

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
