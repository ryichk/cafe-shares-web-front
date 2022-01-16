import { Story, Meta } from '@storybook/react';
import React from 'react';

import type { PostCardProps } from './PostCard';
import { PostCard } from '.';

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as Meta<typeof PostCard>;

const Template: Story<PostCardProps> = (args: PostCardProps) => <PostCard {...args} />;

export const PostsPage = Template.bind({});
PostsPage.story = {
  parameters: {
    nextRouter: {
      path: '/posts',
    },
  },
};
PostsPage.args = {
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

export const CafePage = Template.bind({});
CafePage.story = {
  parameters: {
    nextRouter: {
      path: '/cafe/[id]',
      asPath: '/cafe/J001259101',
    },
  },
};
CafePage.args = {
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
