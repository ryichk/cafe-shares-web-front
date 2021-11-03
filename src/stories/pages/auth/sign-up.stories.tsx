import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignUp from '../../../pages/auth/sign-up';

export default {
  title: 'Pages/Auth/SignUp',
  component: SignUp,
} as Meta<typeof SignUp>;

const Template: Story = () => <SignUp />;

export const Default = Template.bind({});
