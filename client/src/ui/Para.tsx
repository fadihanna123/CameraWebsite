import React from 'react';

const Para: React.FC<ParaProps> = ({ className, children }: ParaProps) => (
  <p className={className?.join(' ')}>{children}</p>
);

export default Para;
