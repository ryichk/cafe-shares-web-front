import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  bgColor: 'bg-danger',
  label: 'リセット',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: '検索',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
