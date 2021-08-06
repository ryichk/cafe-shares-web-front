import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchConditionSettingToggle } from '.';

export default {
  title: 'SearchConditionSettingToggle',
  component: SearchConditionSettingToggle,
} as Meta<typeof SearchConditionSettingToggle>;

const Template: Story<typeof SearchConditionSettingToggle> = () => (
  <SearchConditionSettingToggle />
);

export const Default = Template.bind({});
