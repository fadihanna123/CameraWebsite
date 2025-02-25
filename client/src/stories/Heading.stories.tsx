import { JSX } from 'react';
import { Meta } from '@storybook/react';

// Components
import Heading from '@ui/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & HeadingProps) => (
  <Heading {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  headingLevel: 1,
  className: ['heading'],
  children: 'Heading',
};
