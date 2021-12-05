import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchModal } from '.';

export default {
  title: 'Components/SearchModal',
  component: SearchModal,
} as Meta<typeof SearchModal>;

const Template: Story = (args) => <SearchModal {...args} />;

export const Default = Template.bind({});
