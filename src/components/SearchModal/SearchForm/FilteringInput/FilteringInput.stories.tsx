import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { FilteringInput } from '.';

export default {
  title: 'FilteringInput',
  component: FilteringInput,
} as ComponentMeta<typeof FilteringInput>;

const Template: ComponentStory<typeof FilteringInput> = (args) => <FilteringInput {...args} />;

export const Keyword = Template.bind({});
Keyword.args = {
  label: 'キーワード',
  name: 'keyword',
  placeholder: '店名、住所、駅名など',
};
