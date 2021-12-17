import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SignOutIcon } from '.';

export default {
  title: 'Icons/SignOutIcon',
  component: SignOutIcon,
} as Meta<typeof SignOutIcon>;

const Template: Story = (args) => <SignOutIcon {...args} />;

export const Default = Template.bind({});
