import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignIn from '../../pages/sign-in';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
} as Meta<typeof SignIn>;

const Template: Story = () => <SignIn />;

export const Default = Template.bind({});
