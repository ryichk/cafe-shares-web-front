import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CheckIcon } from '.';

export default {
  title: 'Icons/CheckIcon',
  component: CheckIcon,
} as Meta<typeof CheckIcon>;

const Template: Story = (args) => <CheckIcon {...args} />;

export const Default = Template.bind({});
