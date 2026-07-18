import type { ReactElement } from 'react';
import type { Task, Status } from '../types/types';
import { Card } from './Card';

type ColumnProps = {
  tasks: Task[],
  status: Status,
  onClick: (taskId: string) => void
}

const STATUS_COLORS: Record<Status, string> = {
  todo: 'bg-gray-200 dark:bg-gray-700',
  'in-progress': 'bg-yellow-100 dark:bg-yellow-900',
  done: 'bg-green-100 dark:bg-green-900',
}

export function Column(props: ColumnProps): ReactElement {
  return (
    <div className='column flex w-64 flex-col gap-2 rounded-lg bg-gray-100 p-3 dark:bg-gray-900'> 
      <div className={`${STATUS_COLORS[props.status]}`}>{ props.status }</div>
      {props.tasks.map((task) => (
        <Card key={task.id} task={task} onClick={() => { props.onClick(task.id) }} />
      ))}
    </div>
  );
}