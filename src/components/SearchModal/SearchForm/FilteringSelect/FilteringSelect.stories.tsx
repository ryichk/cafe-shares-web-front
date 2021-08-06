import { Meta, Story } from '@storybook/react';
import React from 'react';

import { filteringOrNot, largeAreas, order } from '../../../../data';
import { SelectProps } from '../../../../interfaces';
import { FilteringSelect } from '.';

export default {
  title: 'FilteringSelect',
  component: FilteringSelect,
  decorators: [
    (Story) => (
      <div className='max-w-sm'>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof FilteringSelect>;

const Template: Story<SelectProps> = (args) => <FilteringSelect {...args} />;

export const Prefecture = Template.bind({});
Prefecture.args = {
  label: '都道府県',
  name: 'prefecure',
  data: largeAreas,
};

export const Wifi = Template.bind({});
Wifi.args = {
  label: 'Wifi',
  name: 'wifi',
  data: filteringOrNot,
};

export const PrivateRoom = Template.bind({});
PrivateRoom.args = {
  label: '個室',
  name: 'private_room',
  data: filteringOrNot,
};

export const NonSmoking = Template.bind({});
NonSmoking.args = {
  label: '禁煙席',
  name: 'non_smoking',
  data: filteringOrNot,
};

export const Parking = Template.bind({});
Parking.args = {
  label: '駐車場',
  name: 'parking',
  data: filteringOrNot,
};

export const Pet = Template.bind({});
Pet.args = {
  label: 'ペット',
  name: 'pet',
  data: filteringOrNot,
};

export const Card = Template.bind({});
Card.args = {
  label: 'カード',
  name: 'card',
  data: filteringOrNot,
};

export const Order = Template.bind({});
Order.args = {
  label: '並び順',
  name: 'order',
  data: order,
};
