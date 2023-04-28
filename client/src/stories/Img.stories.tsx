import React from 'react';
import Img from 'ui/Img';
import { Meta } from '@storybook/react';
import bgImage from '../assets/background.jpg';

const meta: Meta = {
  title: 'Image',
  component: Img,
};

export default meta;

const Template = (args: any) => <Img {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  source: bgImage,
  className: ['img'],
  alt: 'Background',
  ariaLabel: 'Background',
  loading: 'lazy',
  dimensions: [100, 100],
};
