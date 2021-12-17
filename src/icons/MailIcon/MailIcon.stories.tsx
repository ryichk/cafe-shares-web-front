import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MailIcon } from '.';

export default {
  title: 'Icons/MailIcon',
  component: MailIcon,
} as Meta<typeof MailIcon>;

const Template: Story = (args) => <MailIcon {...args} />;

export const Default = Template.bind({});
