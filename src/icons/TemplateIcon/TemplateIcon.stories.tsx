import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TemplateIcon } from '.';

export default {
  title: 'Icons/TemplateIcon',
  component: TemplateIcon,
} as Meta<typeof TemplateIcon>;

const Template: Story = (args) => <TemplateIcon {...args} />;

export const Default = Template.bind({});
