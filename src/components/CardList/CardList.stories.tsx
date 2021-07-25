import { ComponentMeta } from '@storybook/react';
import React from 'react';

import * as CardStories from '../Card/Card.stories';
import { CardListProps } from './CardList';
import { CardList } from '.';

export default {
  component: CardList,
  title: 'CardList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof CardList>;

const Template = (args: CardListProps) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  cafes: [
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
    { ...CardStories.Default.args },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  cafes: [],
};
