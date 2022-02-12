import React from 'react';
import { ParaProps } from 'typings';

const Para: React.FC<ParaProps> = ({ className, children }: ParaProps) => {
  return <p className={className?.join(" ")}>{children}</p>;
};

export default Para;