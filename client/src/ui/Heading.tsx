import { HeadingProps } from 'typings';

const Heading: React.FC<HeadingProps> = ({
  headingLevel,
  className,
  children,
}: HeadingProps) => {
  return (
    <>
      {headingLevel === 1 ? (
        <h1 className={className}>{children}</h1>
      ) : headingLevel === 2 ? (
        <h2 className={className}>{children}</h2>
      ) : headingLevel === 3 ? (
        <h3 className={className}>{children}</h3>
      ) : headingLevel === 4 ? (
        <h4 className={className}>{children}</h4>
      ) : headingLevel === 5 ? (
        <h5 className={className}>{children}</h5>
      ) : headingLevel === 6 && <h6 className={className}>{children}</h6> ? (
        !headingLevel
      ) : (
        <h1 className={className}>{children}</h1>
      )}
    </>
  );
};

export default Heading;
