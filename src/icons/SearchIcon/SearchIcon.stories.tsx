import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchIcon } from '.';

export default {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
} as Meta<typeof SearchIcon>;

const Template: Story = (args) => <SearchIcon {...args} />;

export const Default = Template.bind({});
