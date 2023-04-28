import { MainHeaderProps } from 'models';
import React from 'react';
import PropTypes from 'prop-types';

const mainHeader: React.FC<MainHeaderProps> = ({
  children,
}: MainHeaderProps) => <header>{children}</header>;

mainHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

export default mainHeader;
