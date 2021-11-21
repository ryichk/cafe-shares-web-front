import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ErrorAlert } from '.';

export default {
  title: 'Components/Alerts/ErrorAlert',
  component: ErrorAlert,
} as Meta<typeof ErrorAlert>;

const Template: Story<typeof ErrorAlert> = () => <ErrorAlert message='Error Message' />;

export const Default = Template.bind({});
