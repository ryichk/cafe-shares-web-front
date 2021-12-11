import { Story, Meta } from '@storybook/react';
import React from 'react';

import { UserIcon } from '.';

export default {
  title: 'Icons/UserIcon',
  component: UserIcon,
} as Meta<typeof UserIcon>;

const Template: Story = (args) => <UserIcon {...args} />;

export const Default = Template.bind({});
