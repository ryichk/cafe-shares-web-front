import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CloseIcon } from '.';

export default {
  title: 'Icons/CloseIcon',
  component: CloseIcon,
} as Meta<typeof CloseIcon>;

const Template: Story = (args) => <CloseIcon {...args} />;

export const Default = Template.bind({});
