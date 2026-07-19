import type { Task } from './types/types';
import { Board } from './components/Board';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STATUSES } from './types/types';

const sampleTasks: Task[] = [
  { id: '1', title: '設計を書く', status: 'todo' },
  { id: '2', title: '実装する', status: 'in-progress' },
  { id: '3', title: 'テストする', status: 'todo' },
]

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', sampleTasks);
  
  const handleClick = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        const nextIndex = (STATUSES.indexOf(task.status) + 1) % STATUSES.length;
        return { ...task, status: STATUSES[nextIndex] };
      })
    );
  };
  
  return (
    <div>
      <h1>title</h1>
      <Board
        tasks={tasks}
        onClick={(taskId) => {
          handleClick(taskId);
        }}
      />
    </div>
  )
}

export default App
