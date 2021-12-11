import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SignInIcon } from '.';

export default {
  title: 'Icons/SignInIcon',
  component: SignInIcon,
} as Meta<typeof SignInIcon>;

const Template: Story = (args) => <SignInIcon {...args} />;

export const Default = Template.bind({});
