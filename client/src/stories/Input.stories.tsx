import { JSX } from 'react';
import { Meta } from '@storybook/react-vite';

// Components
import Input from '@ui/Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & InputProps) => (
  <Input {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  id: 'myInput',
  type: 'text',
  className: ['form-control'],
  name: 'myInput',
  isRequired: true,
  acceptValues: '',
  autoComplete: 'off',
  placeHolder: 'Type here...',
  defaultVal: 'Erik',
  register: null,
};
