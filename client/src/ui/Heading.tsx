import { HeadingProps } from 'models';
import React from 'react';
import PropTypes from 'prop-types';

const Heading: React.FC<HeadingProps> = ({
  headingLevel,
  className,
  children,
}: HeadingProps) => (
  <>
    {headingLevel === 1 ? (
      <h1 className={className?.join(' ')}>{children}</h1>
    ) : headingLevel === 2 ? (
      <h2 className={className?.join(' ')}>{children}</h2>
    ) : headingLevel === 3 ? (
      <h3 className={className?.join(' ')}>{children}</h3>
    ) : headingLevel === 4 ? (
      <h4 className={className?.join(' ')}>{children}</h4>
    ) : headingLevel === 5 ? (
      <h5 className={className?.join(' ')}>{children}</h5>
    ) : headingLevel === 6 && (
        <h6 className={className?.join(' ')}>{children}</h6>
      ) ? (
      !headingLevel
    ) : (
      <h1 className={className?.join(' ')}>{children}</h1>
    )}
  </>
);

Heading.propTypes = {
  headingLevel: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.array,
};

export default Heading;
