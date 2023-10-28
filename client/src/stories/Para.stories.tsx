import { Meta } from '@storybook/react';
import Para from 'ui/Para';

const meta: Meta<typeof Para> = {
  title: 'Paragraph',
  component: Para,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & ParaProps) => (
  <Para {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  className: ['myMenu'],
  children: 'Hi bro!',
};
