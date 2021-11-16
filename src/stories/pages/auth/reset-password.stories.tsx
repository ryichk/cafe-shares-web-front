import { Story, Meta } from '@storybook/react';
import React from 'react';

import ResetPassword from '../../../pages/auth/reset-password';

export default {
  title: 'Pages/Auth/ResetPassword',
  component: ResetPassword,
} as Meta<typeof ResetPassword>;

const Template: Story = () => <ResetPassword />;

export const Default = Template.bind({});
