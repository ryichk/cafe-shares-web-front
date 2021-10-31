import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignUp from '.';

export default {
  title: 'Pages/SignUp',
  component: SignUp,
} as Meta<typeof SignUp>;

const Template: Story = () => <SignUp />;

export const Default = Template.bind({});
