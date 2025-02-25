import { JSX } from 'react';
import { Meta } from '@storybook/react';

// Components
import Btn from '@ui/Btn';

const meta: Meta<typeof Btn> = {
  title: 'Button',
  component: Btn,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & BtnProps) => (
  <Btn {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  btnStyle: {
    backgroundColor: 'red',
    color: '#fff',
  },
  className: ['btn'],
  children: 'Send',
  clickFunc: () => {
    console.log('🖱️Clicked!');
  },
};
