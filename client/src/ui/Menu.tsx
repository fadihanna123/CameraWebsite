import { MenuProps } from 'typings';

const Menu: React.FC<MenuProps> = ({ classNames, children }: MenuProps) => (
  <nav className={classNames.join(" ")}>{children}</nav>
);

export default Menu;
