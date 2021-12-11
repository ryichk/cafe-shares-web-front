import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LocationIcon } from '.';

export default {
  title: 'Icons/LocationIcon',
  component: LocationIcon,
} as Meta<typeof LocationIcon>;

const Template: Story = (args) => <LocationIcon {...args} />;

export const Default = Template.bind({});
