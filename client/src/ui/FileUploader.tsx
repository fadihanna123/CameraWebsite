import React from 'react';

// Components
import Input from './Input';

const FileUploader: React.FC<FileUploaderProps> = ({
  id,
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
    acceptValues={acceptValues}
    isRequired={isRequired}
    name={name}
    className={className}
  />
);

export default FileUploader;
