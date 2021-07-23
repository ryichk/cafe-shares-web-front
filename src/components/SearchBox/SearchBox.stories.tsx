import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SearchBox } from './index';

export default {
  title: 'SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = () => <SearchBox />;

export const Default = Template.bind({});
