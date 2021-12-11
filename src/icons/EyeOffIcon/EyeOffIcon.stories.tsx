import { Story, Meta } from '@storybook/react';
import React from 'react';

import { EyeOffIcon } from '.';

export default {
  title: 'Icons/EyeOffIcon',
  component: EyeOffIcon,
} as Meta<typeof EyeOffIcon>;

const Template: Story = (args) => <EyeOffIcon {...args} />;

export const Default = Template.bind({});
