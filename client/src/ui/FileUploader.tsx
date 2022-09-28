import { FileUploaderProps } from 'models';

import Input from './Input';

const FileUploader: React.FC<FileUploaderProps> = ({
  val,
  id,
  changeFunc,
  acceptValues,
  isRequired,
  name,
}: FileUploaderProps) => (
  <Input
    type='file'
    id={id}
    val={val}
    changeFunc={changeFunc}
    acceptValues={acceptValues}
    isRequired={isRequired}
    name={name}
  />
);

export default FileUploader;
