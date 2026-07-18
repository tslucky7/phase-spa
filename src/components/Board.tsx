import type { ReactElement } from 'react';
import type { Task } from '../types/types';
import { Column } from './Column';
import { STATUSES } from '../types/types'

type BoardProps = {
  tasks: Task[],
  onClick: (taskId: string) => void
}

export function Board(props: BoardProps): ReactElement {
  return (
    <div className='board grid grid-cols-3 justify-items-center gap-4 p-4'>
      {STATUSES.map((status) => (
        <Column
          key={status}
          tasks={props.tasks.filter((task) => task.status === status)}
          status={status}
          onClick={ props.onClick }
        />
      ))}
    </div>
  );
}
