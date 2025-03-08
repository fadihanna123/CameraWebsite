import React from 'react';

// Components
import Input from './Input';

const FileUploader: React.FC<FileUploaderProps> = ({
  val,
  id,
  changeFunc,
  acceptValues,
  isRequired,
  name,
  className,
  register,
}: FileUploaderProps) => (
  <Input
    {...(register ? register(name) : {})}
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
