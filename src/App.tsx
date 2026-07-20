import type { Task } from './types/types';
import { Board } from './components/Board';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STATUSES } from './types/types';
import { addTask } from './utils/addTask';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, type TaskFormValues } from './schemas/taskSchema';

const sampleTasks: Task[] = [
  { id: '1', title: '設計を書く', status: 'todo' },
  { id: '2', title: '実装する', status: 'in-progress' },
  { id: '3', title: 'テストする', status: 'todo' },
]

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', sampleTasks);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormValues) => {
    setTasks((prev) => addTask(prev, data.title));
    reset();
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 p-4'>
        <div className='flex gap-2'>
          <input
            id='addTask'
            type="text"
            {...register('title')}
            placeholder='タスク名を入力'
            className='border border-gray-300 rounded px-3 py-2 flex-1'
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2'
          >
            タスクを作成
          </button>
        </div>
        {errors.title && (
          <p className='text-red-500 text-sm'>{errors.title.message}</p>
        )}
      </form>
    </div>
  )
}

export default App
