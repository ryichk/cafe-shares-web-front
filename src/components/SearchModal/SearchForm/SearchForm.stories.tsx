import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SearchForm } from '.';

export default {
  title: 'SearchForm',
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = () => <SearchForm />;

export const Default = Template.bind({});
