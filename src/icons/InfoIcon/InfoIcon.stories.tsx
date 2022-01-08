import { Story, Meta } from '@storybook/react';
import React from 'react';

import { InfoIcon } from '.';

export default {
  title: 'Icons/InfoIcon',
  component: InfoIcon,
} as Meta<typeof InfoIcon>;

const Template: Story = (args) => <InfoIcon {...args} />;

export const Default = Template.bind({});
