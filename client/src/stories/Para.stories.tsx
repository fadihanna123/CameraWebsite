import React from 'react';
import { Meta } from '@storybook/react';
import Para from 'ui/Para';

const meta: Meta = {
  title: 'Paragraph',
  component: Para,
};

export default meta;

const Template = (args: any) => <Para {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  className: ['myMenu'],
  children: 'Hi bro!',
};
