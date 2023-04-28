import { MainFooterProps } from 'models';
import React from 'react';
import PropTypes from 'prop-types';

const mainFooter: React.FC<MainFooterProps> = ({
  classNames,
  children,
}: MainFooterProps) => (
  <footer className={classNames.join(' ')}>{children}</footer>
);

mainFooter.propTypes = {
  classNames: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
};

export default mainFooter;
