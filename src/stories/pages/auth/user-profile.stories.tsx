import { Story, Meta } from '@storybook/react';
import React from 'react';

import UserProfile from '../../../pages/auth/user-profile';
import { AuthContext } from '../../../contexts/AuthContext';

const sampleUser = {
  username: 'sample user',
  attributes: {
    email: 'sample@example.com',
    profile: 'Hi guys. Nice to meet you.'
  },
};

const [user, setUser] = React.useState(sampleUser);

export default {
  title: 'Pages/Auth/UserProfile',
  component: UserProfile,
  decorators: [
    (Story) => (
      <AuthContext.Provider value={{ user, setUser }}>
        <Story />
      </AuthContext.Provider>
    ),
  ],
} as Meta<typeof UserProfile>;

const Template: Story = () => <UserProfile />;

export const Default = Template.bind({});
