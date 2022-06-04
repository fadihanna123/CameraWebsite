import { MainFooterProps } from "models";

const mainFooter: React.FC<MainFooterProps> = ({
    classNames,
    children,
}: MainFooterProps) => (
    <footer className={classNames.join(" ")}>{children}</footer>
);

export default mainFooter;
