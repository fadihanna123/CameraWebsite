import React from 'react';
import FileUploader from 'ui/FileUploader';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'FileUploader',
  component: FileUploader,
};

export default meta;

const Template = (args: any) => <FileUploader {...args} />;

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
