import { Story, Meta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Components/Layouts/Footer',
  component: Footer,
} as Meta<typeof Footer>;

const Template: Story<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
