import type { ReactElement } from 'react';
import type { Task } from '../types/types';

type CardProps = {
  task: Task
  onClick: (taskId: string) => void
}

export function Card(props: CardProps): ReactElement {
  return (
    <div
      className='rounded-lg border border-gray-200 bg-white p-3 shadow-sm cursor-pointer transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
      onClick={() => { props.onClick(props.task.id) }}
    >
      <p className='text-sm font-medium text-gray-800 dark:text-gray-100'>
        { props.task.title }
      </p>
    </div>
  );
}
