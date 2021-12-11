import { Story, Meta } from '@storybook/react';
import React from 'react';

import { StarIcon } from '.';

export default {
  title: 'Icons/StarIcon',
  component: StarIcon,
} as Meta<typeof StarIcon>;

const Template: Story = (args) => <StarIcon {...args} />;

export const Default = Template.bind({});
