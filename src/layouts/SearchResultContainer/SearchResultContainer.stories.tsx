import { Story, Meta } from '@storybook/react';

import { SearchResultContainer, SearchResultContainerProps } from '.';
import * as CardListStories from '../../components/CardList/CardList.stories';

export default {
  title: 'Layouts/SearchResultContainer',
  component: SearchResultContainer,
} as Meta<typeof SearchResultContainer>;

const Template: Story<SearchResultContainerProps> = (args) => <SearchResultContainer {...args} />;

const shop_info = {
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
  results: {
    results_available: '5',
    results_returned: '5',
    results_start: '1',
    shop: [
      { id: 1, ...shop_info },
      { id: 2, ...shop_info },
      { id: 3, ...shop_info },
      { id: 4, ...shop_info },
      { id: 5, ...shop_info },
    ],
  },
};
