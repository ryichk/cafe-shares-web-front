import { Story, Meta } from '@storybook/react';
import React from 'react';

import { HomeIcon } from '.';

export default {
  title: 'Icons/HomeIcon',
  component: HomeIcon,
} as Meta<typeof HomeIcon>;

const Template: Story = (args) => <HomeIcon {...args} />;

export const Default = Template.bind({});
