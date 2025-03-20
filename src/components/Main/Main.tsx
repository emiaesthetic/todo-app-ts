import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import TaskForm from '@/components/TaskForm';
import Title from '@/components/Title';
import TodoList from '@/components/TodoList';
import { useAuth } from '@/hooks/useAuth';
import { Status, Task } from '@/types/task';
import {
  getTasksFromLocalStorage,
  updateTasksInLocalStorage,
} from '@/utils/localStorage';

import EmptyList from './img/empty.svg?react';

export const Main = () => {
  const { username } = useAuth();
  const [tasks, setTask] = useState<Task[]>([]);

  useEffect(() => {
    setTask(getTasksFromLocalStorage(username));
  }, [username]);

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTask(updatedTasks);
    updateTasksInLocalStorage(username, updatedTasks);
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTask(updatedTasks);
    updateTasksInLocalStorage(username, updatedTasks);
  };

  const completeTask = (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: 'done' as Status } : task,
    );
    setTask(updatedTasks);
    updateTasksInLocalStorage(username, updatedTasks);
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
