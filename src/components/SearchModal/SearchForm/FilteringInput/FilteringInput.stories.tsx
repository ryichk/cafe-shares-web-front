import { Story, Meta } from '@storybook/react';
import React from 'react';

import { InputProps } from '../../.../../../../interfaces';
import { FilteringInput } from '.';

export default {
  title: 'Components/SearchModal/SearchForm/FilteringInput',
  component: FilteringInput,
  decorators: [
    (Story) => (
      <div className='max-w-sm'>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof FilteringInput>;

const Template: Story<InputProps> = (args) => <FilteringInput {...args} />;

export const Keyword = Template.bind({});
Keyword.args = {
  label: 'キーワード',
  name: 'keyword',
  placeholder: '店名、住所、駅名など',
};
