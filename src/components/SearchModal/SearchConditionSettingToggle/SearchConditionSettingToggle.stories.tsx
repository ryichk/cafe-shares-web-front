import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SearchConditionSettingToggle } from '.';

export default {
  title: 'SearchConditionSettingToggle',
  component: SearchConditionSettingToggle,
} as ComponentMeta<typeof SearchConditionSettingToggle>;

const Template: ComponentStory<typeof SearchConditionSettingToggle> = () => (
  <SearchConditionSettingToggle />
);

export const Default = Template.bind({});
