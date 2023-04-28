import React from 'react';
import Input from 'ui/Input';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template = (args: any) => <Input {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  id: 'myInput',
  type: 'text',
  className: ['form-control'],
  name: 'myInput',
  val: '',
  isRequired: true,
  changeFunc: () => {
    // eslint-disable-next-line no-console
    console.log('Changed!');
  },
  acceptValues: '',
  autoComplete: 'off',
};
