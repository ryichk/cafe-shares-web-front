import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnColor: 'btn-secondary',
  label: 'Secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  btnColor: 'btn-accent',
  label: 'Accent',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};
