import { Story, Meta } from '@storybook/react';
import React from 'react';

import { HeartIcon } from '.';

export default {
  title: 'Icons/HeartIcon',
  component: HeartIcon,
} as Meta<typeof HeartIcon>;

const Template: Story = (args) => <HeartIcon {...args} />;

export const Default = Template.bind({});
