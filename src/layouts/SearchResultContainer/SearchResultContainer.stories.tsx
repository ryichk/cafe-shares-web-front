import { Story, Meta } from '@storybook/react';

import { SearchResultContainer, SearchResultContainerProps } from '.';
import * as CardListStories from '../../components/CardList/CardList.stories';

export default {
  title: 'Layouts/SearchResultContainer',
  component: SearchResultContainer,
} as Meta<typeof SearchResultContainer>;

const Template: Story<SearchResultContainerProps> = (args) => <SearchResultContainer {...args} />;

const shop = {
  id: 0,
  genre: { name: CardListStories.Default.args.cafes[0].genre.name },
  sub_genre: { name: CardListStories.Default.args.cafes[0].sub_genre.name },
  large_area: { name: CardListStories.Default.args.cafes[0].large_area.name },
  middle_area: { name: CardListStories.Default.args.cafes[0].middle_area.name },
  photo: { pc: { l: CardListStories.Default.args.cafes[0].photo.pc.l } },
  name: CardListStories.Default.args.cafes[0].name,
  catch: CardListStories.Default.args.cafes[0].catch,
};

export const Loading = Template.bind({});
Loading.args = {
  shop: [
    { id: 1, ...shop },
    { id: 2, ...shop },
    { id: 3, ...shop },
    { id: 4, ...shop },
    { id: 5, ...shop },
  ],
  page: {
    results_available: '5',
  },
  loading: true,
  handleReadMore: function () {},
};

export const FiveResults = Template.bind({});
FiveResults.args = {
  shop: [
    { id: 1, ...shop },
    { id: 2, ...shop },
    { id: 3, ...shop },
    { id: 4, ...shop },
    { id: 5, ...shop },
  ],
  page: {
    results_available: '5',
  },
  loading: false,
  handleReadMore: function () {},
};
