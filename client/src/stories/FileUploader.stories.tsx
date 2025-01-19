import { Meta } from '@storybook/react';

// Components
import FileUploader from '../ui/FileUploader';
import { JSX } from 'react';

const meta: Meta<typeof FileUploader> = {
  title: 'FileUploader',
  component: FileUploader,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & FileUploaderProps) => (
  <FileUploader {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  id: 'fileUpload',
  changeFunc: () => {
    // eslint-disable-next-line no-console
    console.log('Changed!');
  },
  acceptValues: 'image/png',
  isRequired: true,
  name: 'fileUpload',
  className: ['fileUpload'],
};
