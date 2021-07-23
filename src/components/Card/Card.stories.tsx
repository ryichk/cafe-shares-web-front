import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import type { CardProps } from './Card';
import { Card } from '.';

export default {
  component: Card,
  title: 'Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://imgfp.hotp.jp/IMGH/62/45/P021566245/P021566245_480.jpg',
  name: 'and people jinnan (アンドピープル神南)',
  description: '海外の廃墟がコンセプトのダイニングバー★',
  area: '東京都渋谷区神南',
};
