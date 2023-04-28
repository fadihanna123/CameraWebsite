import React from 'react';
import Heading from 'ui/Heading';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Heading',
  component: Heading,
};

export default meta;

const Template = (args: any) => <Heading {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  headingLevel: 1,
  className: ['heading'],
  children: 'Heading',
};
