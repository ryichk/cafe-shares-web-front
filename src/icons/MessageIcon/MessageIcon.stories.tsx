import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MessageIcon } from '.';

export default {
  title: 'Icons/MessageIcon',
  component: MessageIcon,
} as Meta<typeof MessageIcon>;

const Template: Story = (args) => <MessageIcon {...args} />;

export const Default = Template.bind({});
