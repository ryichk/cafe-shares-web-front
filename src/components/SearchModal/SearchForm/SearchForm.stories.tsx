import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchForm } from '.';

export default {
  title: 'SearchForm',
  component: SearchForm,
} as Meta<typeof SearchForm>;

const Template: Story<typeof SearchForm> = () => <SearchForm />;

export const Default = Template.bind({});
