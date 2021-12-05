import { Story, Meta } from '@storybook/react';
import React from 'react';

import * as CardListStories from '../../components/CardList/CardList.stories';
import type { HotpepperResponse } from '../../interfaces';
import Home from '../../pages';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta<typeof Home>;

const Template: Story<{ results: HotpepperResponse['results'] }> = (args) => <Home {...args} />;

export const FiveResults = Template.bind({});
FiveResults.args = {
  results: {
    results_available: 5,
    results_returned: 5,
    results_start: 1,
    shop: [...CardListStories.Default.args.cafes],
  },
};

export const NoHit = Template.bind({});
NoHit.args = {
  results: {
    results_available: 0,
    results_returned: 0,
    results_start: 1,
    shop: [],
  },
};
