import React from 'react';

const Img: React.FC<ImgProps> = ({
  source,
  className,
  alt,
  ariaLabel,
  dimensions,
}: ImgProps) => (
  <img
    src={source}
    className={className?.join(' ')}
    alt={alt}
    aria-label={ariaLabel}
    width={dimensions && dimensions[0]}
    height={dimensions && dimensions[1]}
  />
);

export default Img;
