import React from 'react';
import { TxtAreaProps } from 'typings';

const TxtArea: React.FC<TxtAreaProps> = ({ id, className }: TxtAreaProps) => {
  return <textarea className={className?.join(" ")} id={id}></textarea>;
};

export default TxtArea;