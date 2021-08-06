import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchModal } from '.';

export default {
  title: 'SearchModal',
  component: SearchModal,
} as Meta<typeof SearchModal>;

const Template: Story<typeof SearchModal> = () => <SearchModal />;

export const Default = Template.bind({});
