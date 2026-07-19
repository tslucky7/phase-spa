export const STATUSES = ['todo', 'in-progress', 'done'] as const;

export type Status = typeof STATUSES[number];

export type Task = {
  id: string
  title: string
  status: Status
}
