import { Story, Meta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Layouts/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: Story<typeof Header> = () => <Header />;

export const Default = Template.bind({});
