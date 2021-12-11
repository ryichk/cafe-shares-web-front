import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PlusIcon } from '.';

export default {
  title: 'Icons/PlusIcon',
  component: PlusIcon,
} as Meta<typeof PlusIcon>;

const Template: Story = (args) => <PlusIcon {...args} />;

export const Default = Template.bind({});
