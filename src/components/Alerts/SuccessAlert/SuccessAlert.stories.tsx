import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SuccessAlert } from '.';

export default {
  title: 'Components/Alerts/SuccessAlert',
  component: SuccessAlert,
} as Meta<typeof SuccessAlert>;

const Template: Story<typeof SuccessAlert> = () => <SuccessAlert message='Success Message' />;

export const Default = Template.bind({});
