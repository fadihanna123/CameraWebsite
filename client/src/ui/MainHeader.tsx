import { MainHeaderProps } from "models";

const mainHeader: React.FC<MainHeaderProps> = ({
    children,
}: MainHeaderProps) => <header>{children}</header>;

export default mainHeader;
