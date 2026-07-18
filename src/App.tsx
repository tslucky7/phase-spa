import type { Task } from './types/types';
import { Board } from './components/Board';
import { useReducer } from 'react';
import { tasksReducer } from './reducers/tasksReducer';

const sampleTasks: Task[] = [
  { id: '1', title: '設計を書く', status: 'todo' },
  { id: '2', title: '実装する', status: 'in-progress' },
  { id: '3', title: 'テストする', status: 'todo' },
]

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, sampleTasks);
  return (
    <div>
      <h1>title</h1>
      <Board
        tasks={tasks}
        onClick={(taskId) => {
          dispatch({ type: 'CYCLE_STATUS', taskId });
        }}
      />
    </div>
  )
}

export default App
