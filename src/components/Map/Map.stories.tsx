import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Map } from '.';

export default {
  title: 'Components/Map',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  center: {
    lat: 35.6069243713,
    lng: 139.669289388,
  },
  zoo: 13,
  containerStyle: {
    width: '200px',
    height: '200px',
  },
};
