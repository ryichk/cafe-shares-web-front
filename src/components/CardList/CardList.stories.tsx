import { Story, Meta } from '@storybook/react';
import React from 'react';

import * as CardStories from './Card/Card.stories';
import { CardListProps } from './CardList';
import { CardList } from '.';

export default {
  component: CardList,
  title: 'Components/CardList',
} as Meta<typeof CardList>;

const Template: Story<CardListProps> = (args: CardListProps) => <CardList {...args} />;

export const Default = Template.bind({});
const cafeInfo = {
  name: CardStories.Default.args.name,
  photo: { pc: { l: CardStories.Default.args.imageURL } },
  genre: { name: 'カフェ・スイーツ' },
  sub_genre: { name: 'ダイニングバー・バル' },
  catch: CardStories.Default.args.catchCopy,
  large_area: { name: '東京' },
  middle_area: { name: '渋谷' },
  address: '東京都渋谷区神南１-20-5　VORT渋谷briller 6F',
  station_name: '渋谷',
  access:
    '渋谷ハチ公口より徒歩5分　マルイシティの道を左折しすぐにあるファミリーマートが１Ｆにあるビルの6Fです。',
  capacity: '90',
  urls: { pc: 'https://www.hotpepper.jp/strJ001117036/?vos=nhppalsa000016' },
  open: '月～日、祝日、祝前日: 12:00～20:00 （料理L.O. 19:00 ドリンクL.O. 19:30）',
  close:
    '※無断キャンセルをされた場合、今後アンドピープルでのご予約が出来なくなる場合がございます。',
  wifi: '未確認',
  parking: 'なし',
  pet: '不可',
  card: '利用可',
  budget: { average: '2000～4000円' },
};
Default.args = {
  loading: false,
  cafes: [
    { id: '1', ...cafeInfo },
    { id: '2', ...cafeInfo },
    { id: '3', ...cafeInfo },
    { id: '4', ...cafeInfo },
    { id: '5', ...cafeInfo },
  ],
};

export const Loading = Template.bind({});
const blankCafeInfo = {
  name: '',
  photo: { pc: { l: '' } },
  genre: { name: '' },
  sub_genre: { name: '' },
  catch: '',
  large_area: { name: '' },
  middle_area: { name: '' },
  address: '',
  station_name: '',
  access: '',
  capacity: '',
  urls: { pc: '' },
  open: '',
  close: '',
  wifi: '',
  parking: '',
  pet: '',
  card: '',
  budget: { average: '' },
};
Loading.args = {
  loading: true,
  cafes: [
    { id: '1', ...blankCafeInfo },
    { id: '2', ...blankCafeInfo },
    { id: '3', ...blankCafeInfo },
    { id: '4', ...blankCafeInfo },
    { id: '5', ...blankCafeInfo },
  ],
};
