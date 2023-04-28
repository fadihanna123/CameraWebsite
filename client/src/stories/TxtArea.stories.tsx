import React from 'react';
import { Meta } from '@storybook/react';
import TxtArea from 'ui/TxtArea';

const meta: Meta = {
  title: 'TextArea',
  component: TxtArea,
};

export default meta;

const Template = (args: any) => <TxtArea {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  className: ['myTxtArea'],
  id: 'myTxtArea',
};
