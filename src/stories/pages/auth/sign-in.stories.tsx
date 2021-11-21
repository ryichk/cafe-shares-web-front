import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignIn from '../../../pages/auth/sign-in';

export default {
  title: 'Pages/Auth/SignIn',
  component: SignIn,
} as Meta<typeof SignIn>;

const Template: Story = () => <SignIn />;

export const Default = Template.bind({});
