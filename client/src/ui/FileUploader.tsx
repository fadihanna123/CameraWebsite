import PropTypes from 'prop-types';

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

FileUploader.propTypes = {
  val: PropTypes.string,
  id: PropTypes.string.isRequired,
  changeFunc: PropTypes.func,
  acceptValues: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.array,
};

export default FileUploader;
