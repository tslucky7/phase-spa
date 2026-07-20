import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Board } from './Board';

const meta: Meta<typeof Board> = {
  component: Board,
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  args: {
    tasks: [
      { id: '1', title: '設計を書く', status: 'todo' },
      { id: '2', title: '実装する', status: 'in-progress' },
      { id: '3', title: 'テストする', status: 'todo' },
      { id: '4', title: 'リリースする', status: 'done' },
    ],
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
  },
};
