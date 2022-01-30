import { InputProps } from 'typings';

const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  name,
  val,
  isRequired,
  changeFunc,
  acceptValues,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      className={className?.join(" ")}
      name={name}
      onChange={changeFunc}
      value={val}
      required={isRequired}
      accept={acceptValues}
    />
  );
};

export default Input;
