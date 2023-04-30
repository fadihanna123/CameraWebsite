import React from 'react';
import { Meta } from '@storybook/react';
import Menu from 'ui/Menu';
import { MenuProps } from 'models';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MenuProps) => (
  <Menu {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  classNames: ['myMenu'],
  children: 'Google',
};
