import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MoonIcon } from '.';

export default {
  title: 'Icons/MoonIcon',
  component: MoonIcon,
} as Meta<typeof MoonIcon>;

const Template: Story = (args) => <MoonIcon {...args} />;

export const Default = Template.bind({});
