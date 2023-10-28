import { Meta } from '@storybook/react';
import TxtArea from 'ui/TxtArea';

const meta: Meta<typeof TxtArea> = {
  title: 'TextArea',
  component: TxtArea,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & TxtAreaProps) => (
  <TxtArea {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  className: ['myTxtArea'],
  id: 'myTxtArea',
};
