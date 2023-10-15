import React from 'react';
import PropTypes from 'prop-types';

const Menu: React.FC<MenuProps> = ({ classNames, children }: MenuProps) => (
  <nav className={classNames.join(' ')}>{children}</nav>
);

Menu.propTypes = {
  classNames: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
};

export default Menu;
