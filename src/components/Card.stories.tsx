import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Todo: Story = {
  args: {
    task: { id: '1', title: '設計を書く', status: 'todo' },
  },
  play: async ({ args, canvas, userEvent }) => {
    const cardText = canvas.getByText(args.task.title);

    await userEvent.click(cardText);

    await expect(args.onClick).toHaveBeenCalledWith(args.task.id);
  }
};

export const InProgress: Story = {
  args: {
    task: { id: '2', title: '実装する', status: 'in-progress' },
  },
};

export const Done: Story = {
  args: {
    task: { id: '3', title: 'テストする', status: 'done' },
  },
};
