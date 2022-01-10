import { Story, Meta } from '@storybook/react';
import React from 'react';

import { InfoAlert } from '.';

export default {
  title: 'Components/Alerts/InfoAlert',
  component: InfoAlert,
} as Meta<typeof InfoAlert>;

const Template: Story<typeof InfoAlert> = () => <InfoAlert message='Info Message' />;

export const Default = Template.bind({});
