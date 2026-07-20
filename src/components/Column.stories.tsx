import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Column } from './Column';

const meta: Meta<typeof Column> = {
  component: Column,
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Column>;

export const Todo: Story = {
  args: {
    status: 'todo',
    tasks: [
      { id: '1', title: '設計を書く', status: 'todo' },
      { id: '2', title: '実装する', status: 'todo' },
    ],
  },
};

export const Empty: Story = {
  args: {
    status: 'in-progress',
    tasks: [],
  },
};
