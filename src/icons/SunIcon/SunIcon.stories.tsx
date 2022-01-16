import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SunIcon } from '.';

export default {
  title: 'Icons/SunIcon',
  component: SunIcon,
} as Meta<typeof SunIcon>;

const Template: Story = (args) => <SunIcon {...args} />;

export const Default = Template.bind({});
