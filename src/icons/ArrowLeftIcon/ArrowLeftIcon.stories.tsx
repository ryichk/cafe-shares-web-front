import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ArrowLeftIcon } from '.';

export default {
  title: 'Icons/ArrowLeftIcon',
  component: ArrowLeftIcon,
} as Meta<typeof ArrowLeftIcon>;

const Template: Story = (args) => <ArrowLeftIcon {...args} />;

export const Default = Template.bind({});
