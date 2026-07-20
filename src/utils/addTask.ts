import type { Task } from "../types/types";

export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    status: 'todo'
  };
  return [...tasks, newTask];
}