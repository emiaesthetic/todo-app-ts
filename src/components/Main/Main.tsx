import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import TaskForm from '@/components/TaskForm';
import Title from '@/components/Title';
import { useAuth } from '@/hooks/useAuth';
import { Task } from '@/types/task';
import {
  addTaskToLocalStorage,
  getTasksFromLocalStorage,
} from '@/utils/localStorage';

export const Main = () => {
  const { username } = useAuth();
  const [tasks, setTask] = useState<Task[]>(getTasksFromLocalStorage(username));

  const addTask = (task: Task) => {
    setTask([...tasks, task]);
    addTaskToLocalStorage(username, task);
  };

  return (
    <Container className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <Title username={username} />
      <TaskForm onSave={addTask} />
    </Container>
  );
};
