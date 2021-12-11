import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CogIcon } from '.';

export default {
  title: 'Icons/CogIcon',
  component: CogIcon,
} as Meta<typeof CogIcon>;

const Template: Story = (args) => <CogIcon {...args} />;

export const Default = Template.bind({});
