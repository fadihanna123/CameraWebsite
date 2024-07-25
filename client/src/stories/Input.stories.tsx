import { Meta } from '@storybook/react';

// Components
import Input from '../ui/Input';

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
  val: '',
  isRequired: true,
  changeFunc: () => {
    // eslint-disable-next-line no-console
    console.log('Changed!');
  },
  acceptValues: '',
  autoComplete: 'off',
};
