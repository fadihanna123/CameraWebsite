import { MainHeaderProps } from 'typings';

const mainHeader: React.FC<MainHeaderProps> = ({
  children,
}: MainHeaderProps) => <header>{children}</header>;

export default mainHeader;
