import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LockIcon } from '.';

export default {
  title: 'Icons/LockIcon',
  component: LockIcon,
} as Meta<typeof LockIcon>;

const Template: Story = (args) => <LockIcon {...args} />;

export const Default = Template.bind({});
