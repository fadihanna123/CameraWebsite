import { InputProps } from 'models';

const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  name,
  val,
  isRequired,
  changeFunc,
  acceptValues,
  autoComplete,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      className={className?.join(' ')}
      name={name}
      onChange={changeFunc}
      value={val}
      required={isRequired}
      accept={acceptValues}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
