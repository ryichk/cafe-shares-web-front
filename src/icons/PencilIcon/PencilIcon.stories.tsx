import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PencilIcon } from '.';

export default {
  title: 'Icons/PencilIcon',
  component: PencilIcon,
} as Meta<typeof PencilIcon>;

const Template: Story = (args) => <PencilIcon {...args} />;

export const Default = Template.bind({});
