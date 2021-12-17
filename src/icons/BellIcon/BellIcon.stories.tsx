import { Story, Meta } from '@storybook/react';
import React from 'react';

import { BellIcon } from '.';

export default {
  title: 'Icons/BellIcon',
  component: BellIcon,
} as Meta<typeof BellIcon>;

const Template: Story = (args) => <BellIcon {...args} />;

export const Default = Template.bind({});
