import { Story, Meta } from '@storybook/react';
import React from 'react';

import * as CardListStories from '../components/CardList/CardList.stories';
import type { HotpepperResponse } from '../interfaces';
import Home from '.';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta<typeof Home>;

const Template: Story<{ data: HotpepperResponse }> = (args) => <Home {...args} />;

export const FiveResults = Template.bind({});
FiveResults.args = {
  data: {
    results: {
      results_available: 5,
      results_returned: 5,
      results_start: 1,
      shop: [...CardListStories.Default.args.cafes],
    },
  },
};

export const NoHit = Template.bind({});
NoHit.args = {
  data: {
    results: {
      results_available: 0,
      results_returned: 0,
      results_start: 1,
      shop: [],
    },
  },
};
