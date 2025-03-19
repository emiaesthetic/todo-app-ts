import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import TaskForm from '@/components/TaskForm';
import Title from '@/components/Title';
import TodoList from '@/components/TodoList';
import { useAuth } from '@/hooks/useAuth';
import { Task } from '@/types/task';
import {
  addTaskToLocalStorage,
  getTasksFromLocalStorage,
  removeTaskFromLocalStorage,
  updateTaskInLocalStorage,
} from '@/utils/localStorage';

import EmptyList from './img/empty.svg?react';

export const Main = () => {
  const { username } = useAuth();
  const [tasks, setTask] = useState<Task[]>([]);

  useEffect(() => {
    setTask(getTasksFromLocalStorage(username));
  }, [username]);

  const addTask = (task: Task) => {
    setTask([...tasks, task]);
    addTaskToLocalStorage(username, task);
  };

  const removeTask = (id: string) => {
    setTask(tasks.filter(task => task.id !== id));
    removeTaskFromLocalStorage(username, id);
  };

  const completeTask = (id: string) => {
    setTask(
      tasks.map(task => (task.id === id ? { ...task, status: 'done' } : task)),
    );
    updateTaskInLocalStorage(username, id);
  };

  return (
    <Container className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <Title username={username} />
      <TaskForm onSave={addTask} />

      {tasks.length === 0 && <EmptyList />}

      {tasks.length > 0 && (
        <TodoList
          tasks={tasks}
          onDelete={removeTask}
          onComplete={completeTask}
        />
      )}
    </Container>
  );
};
