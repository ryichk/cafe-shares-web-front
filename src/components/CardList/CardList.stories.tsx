import { ComponentMeta } from '@storybook/react';
import React from 'react';

import * as CardStories from '../Card/Card.stories';
import { CardListProps } from './CardList';
import { CardList } from '.';

export default {
  component: CardList,
  title: 'CardList',
  decorators: [(story) => <div>{story()}</div>],
} as ComponentMeta<typeof CardList>;

const Template = (args: CardListProps) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  cafes: [
    {
      name: CardStories.Default.args.name,
      photo: { pc: { l: CardStories.Default.args.imageURL } },
      catch: CardStories.Default.args.catchCopy,
      large_area: { name: '東京' },
      middle_area: { name: '渋谷' },
    },
    {
      name: CardStories.Default.args.name,
      photo: { pc: { l: CardStories.Default.args.imageURL } },
      catch: CardStories.Default.args.catchCopy,
      large_area: { name: '東京' },
      middle_area: { name: '渋谷' },
    },
    {
      name: CardStories.Default.args.name,
      photo: { pc: { l: CardStories.Default.args.imageURL } },
      catch: CardStories.Default.args.catchCopy,
      large_area: { name: '東京' },
      middle_area: { name: '渋谷' },
    },
    {
      name: CardStories.Default.args.name,
      photo: { pc: { l: CardStories.Default.args.imageURL } },
      catch: CardStories.Default.args.catchCopy,
      large_area: { name: '東京' },
      middle_area: { name: '渋谷' },
    },
    {
      name: CardStories.Default.args.name,
      photo: { pc: { l: CardStories.Default.args.imageURL } },
      catch: CardStories.Default.args.catchCopy,
      large_area: { name: '東京' },
      middle_area: { name: '渋谷' },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  cafes: [
    {
      name: '',
      photo: { pc: { l: '' } },
      catch: '',
      large_area: { name: '' },
      middle_area: { name: '' },
    },
    {
      name: '',
      photo: { pc: { l: '' } },
      catch: '',
      large_area: { name: '' },
      middle_area: { name: '' },
    },
    {
      name: '',
      photo: { pc: { l: '' } },
      catch: '',
      large_area: { name: '' },
      middle_area: { name: '' },
    },
    {
      name: '',
      photo: { pc: { l: '' } },
      catch: '',
      large_area: { name: '' },
      middle_area: { name: '' },
    },
    {
      name: '',
      photo: { pc: { l: '' } },
      catch: '',
      large_area: { name: '' },
      middle_area: { name: '' },
    },
  ],
};
