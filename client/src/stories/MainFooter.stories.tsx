import React from 'react';
import { Meta } from '@storybook/react';
import MainFooter from 'ui/MainFooter';

const meta: Meta = {
  title: 'mainFooter',
  component: MainFooter,
};

export default meta;

const Template = (args: any) => <MainFooter {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  classNames: ['myFooter'],
  children: 'This is my footer',
};
