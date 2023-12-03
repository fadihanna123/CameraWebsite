import Input from './Input';
import React from 'react';

const FileUploader: React.FC<FileUploaderProps> = ({
  val,
  id,
  changeFunc,
  acceptValues,
  isRequired,
  name,
  className,
}: FileUploaderProps) => (
  <Input
    type='file'
    id={id}
    val={val}
    changeFunc={changeFunc}
    acceptValues={acceptValues}
    isRequired={isRequired}
    name={name}
    className={className}
  />
);

export default FileUploader;
