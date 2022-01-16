import { Story, Meta } from '@storybook/react';
import React from 'react';

import type { CarouselProps } from './Carousel';
import { Carousel } from '.';

export default {
  title: 'Components/PostCard/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>;

const Template: Story<CarouselProps> = (args: CarouselProps) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.story = {
  parameters: {
    nextRouter: {
      path: '/posts',
    },
  },
};
Default.args = {
  post: {
    id: '0123456abcdef',
    cafeId: 'J001259101',
    cafeName: "FLIPPER'S 自由が丘店",
    content: 'sample post card story',
    pictures: [
      'https://imgfp.hotp.jp/IMGH/22/33/P036642233/P036642233_238.jpg',
      'https://imgfp.hotp.jp/IMGH/86/47/P027758647/P027758647_238.jpg',
    ],
    owner: 'ryichk',
    createdAt: '2022-01-08T13:59:49.770Z',
  },
};
