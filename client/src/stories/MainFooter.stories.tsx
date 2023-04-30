import React from 'react';
import { Meta } from '@storybook/react';
import MainFooter from 'ui/MainFooter';
import { MainFooterProps } from 'models';

const meta: Meta<typeof MainFooter> = {
  title: 'mainFooter',
  component: MainFooter,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MainFooterProps) => (
  <MainFooter {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  classNames: ['myFooter'],
  children: 'This is my footer',
};
