import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchFormProps } from './SearchForm';
import { SearchModal } from '.';

export default {
  title: 'Components/SearchModal',
  component: SearchModal,
} as Meta<typeof SearchModal>;

const Template: Story<SearchFormProps> = (args) => <SearchModal {...args} />;

export const Default = Template.bind({});
