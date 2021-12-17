import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PhotoIcon } from '.';

export default {
  title: 'Icons/PhotoIcon',
  component: PhotoIcon,
} as Meta<typeof PhotoIcon>;

const Template: Story = (args) => <PhotoIcon {...args} />;

export const Default = Template.bind({});
