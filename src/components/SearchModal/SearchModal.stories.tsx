import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SearchModal } from '.';

export default {
  title: 'SearchModal',
  component: SearchModal,
} as ComponentMeta<typeof SearchModal>;

const Template: ComponentStory<typeof SearchModal> = () => <SearchModal />;

export const Default = Template.bind({});
