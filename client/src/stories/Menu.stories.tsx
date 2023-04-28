import React from 'react';
import { Meta } from '@storybook/react';
import Menu from 'ui/Menu';

const meta: Meta = {
  title: 'Menu',
  component: Menu,
};

export default meta;

const Template = (args: any) => <Menu {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  classNames: ['myMenu'],
  children: 'Google',
};
