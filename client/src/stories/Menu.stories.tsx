import { Meta } from '@storybook/react';

// Components
import Menu from '../ui/Menu';

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
