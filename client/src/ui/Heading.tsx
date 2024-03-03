import React from 'react';

const Heading: React.FC<HeadingProps> = ({
  headingLevel,
  className,
  children,
}: HeadingProps) => {
  const headingLevelTag = (tag: number | undefined) => {
    const attrs = { className: className?.join(' ') };

    if (tag === 1) {
      return <h1 {...attrs}> {children} </h1>;
    } else if (tag === 2) {
      return <h2 {...attrs}> {children} </h2>;
    } else if (tag === 3) {
      return <h3 {...attrs}> {children} </h3>;
    } else if (tag === 4) {
      return <h4 {...attrs}> {children} </h4>;
    } else if (tag === 5) {
      return <h5 {...attrs}> {children} </h5>;
    } else if (tag === 6) {
      return <h6 {...attrs}> {children} </h6>;
    } else {
      return <h1 {...attrs}> {children} </h1>;
    }
  };

  return <>{headingLevelTag(headingLevel)}</>;
};

export default Heading;
