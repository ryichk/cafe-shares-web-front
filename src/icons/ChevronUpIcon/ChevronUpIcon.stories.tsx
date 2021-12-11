import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ChevronUpIcon } from '.';

export default {
  title: 'Icons/ChevronUpIcon',
  component: ChevronUpIcon,
} as Meta<typeof ChevronUpIcon>;

const Template: Story = (args) => <ChevronUpIcon {...args} />;

export const Default = Template.bind({});
