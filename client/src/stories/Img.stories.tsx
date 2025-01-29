import { Meta } from '@storybook/react';

// Components
import Img from '../ui/Img';
import bgImage from '../assets/background.jpg';
import { JSX } from 'react';

const meta: Meta<typeof Img> = {
  title: 'Image',
  component: Img,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & ImgProps) => (
  <Img {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  source: bgImage,
  className: ['img'],
  alt: 'Background',
  ariaLabel: 'Background',
  loading: 'lazy',
  dimensions: [100, 100],
};
