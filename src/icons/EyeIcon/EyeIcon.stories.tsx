import { Story, Meta } from '@storybook/react';
import React from 'react';

import { EyeIcon } from '.';

export default {
  title: 'Icons/EyeIcon',
  component: EyeIcon,
} as Meta<typeof EyeIcon>;

const Template: Story = (args) => <EyeIcon {...args} />;

export const Default = Template.bind({});
