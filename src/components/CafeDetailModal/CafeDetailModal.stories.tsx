import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import * as CardListStories from '../CardList/CardList.stories';
import { CafeDetailProps } from './CafeDetail';
import { CafeDetailModal } from '.';

export default {
  title: 'CardDetailModal',
  component: CafeDetailModal,
} as ComponentMeta<typeof CafeDetailModal>;

const Template: ComponentStory<typeof CafeDetailModal> = (args: CafeDetailProps) => (
  <>
    <input type='checkbox' id={args.id} className='modal-toggle' checked />
    <CafeDetailModal {...args} />
  </>
);

export const Default = Template.bind({});
const cafes = CardListStories.Default.args.cafes[0];
Default.args = {
  id: cafes.id,
  imageURL: cafes.photo.pc.l,
  name: cafes.name,
  catchCopy: cafes.catch,
  stationName: cafes.station_name,
  access: cafes.access,
  address: cafes.address,
  businessHours: cafes.open,
  closeDay: cafes.close,
  budget: cafes.budget.average,
  card: cafes.card,
  capacity: cafes.capacity,
  wifi: cafes.wifi,
  parking: cafes.parking,
  pet: cafes.pet,
  cafeURL: cafes.urls.pc,
};
