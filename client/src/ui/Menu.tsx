import { MenuProps } from 'models';

const Menu: React.FC<MenuProps> = ({ classNames, children }: MenuProps) => (
    <nav className={classNames.join(" ")}>{children}</nav>
);

export default Menu;
