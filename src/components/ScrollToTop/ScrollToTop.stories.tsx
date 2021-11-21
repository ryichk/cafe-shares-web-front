import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ChevronUpIcon } from '../../icons';

const ScrollToTop = ({ visible = false }) => {
  return (
    <>
      {visible && (
        <div className='btn btn-primary btn-circle btn-sm'>
          <ChevronUpIcon />
        </div>
      )}
    </>
  );
};

export default {
  title: 'Components/ScrollToTop',
  component: ScrollToTop,
} as Meta<typeof ScrollToTop>;

const Template: Story = (args) => <ScrollToTop {...args} />;

export const Default = Template.bind({});

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};
