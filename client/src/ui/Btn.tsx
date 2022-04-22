import { BtnProps } from 'models';

const Btn: React.FC<BtnProps> = ({
    className,
    clickFunc,
    children,
    btnStyle,
}: BtnProps) => {
    return (
        <button
            style={btnStyle}
            type="button"
            className={className?.join(" ")}
            onClick={clickFunc}
        >
            {children}
        </button>
    );
};

export default Btn;
