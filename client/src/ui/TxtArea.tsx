import { TxtAreaProps } from 'models';
import React from 'react';

const TxtArea: React.FC<TxtAreaProps> = ({ id, className }: TxtAreaProps) => (
  <textarea className={className?.join(' ')} id={id}></textarea>
);

export default TxtArea;
