import { STATUSES } from "../types/types";
import type { Task, TaskAction } from "../types/types";

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'CYCLE_STATUS':
      return tasks.map((task) => {
        if (task.id === action.taskId) {
          const nextIndex = (STATUSES.indexOf(task.status) + 1) % STATUSES.length;
          return { ...task, status: STATUSES[nextIndex] };
        }
        return task;
      });
  }
}