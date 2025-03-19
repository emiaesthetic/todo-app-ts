import { Task } from '@/types/task';

const isValidTask = (task: unknown): task is Task => {
  if (typeof task !== 'object' || task === null) return false;

  return (
    'id' in task &&
    'name' in task &&
    'status' in task &&
    typeof task.id === 'string' &&
    typeof task.name === 'string' &&
    typeof task.status === 'string'
  );
};

const isValidTaskArray = (data: unknown): data is Task[] =>
  Array.isArray(data) && data.every(isValidTask);

export const getTasksFromLocalStorage = (username: string): Task[] => {
  const storageData = localStorage.getItem(username);

  if (storageData) {
    const userTasks = JSON.parse(storageData);
    return isValidTaskArray(userTasks) ? userTasks : [];
  }

  return [];
};

export const addTaskToLocalStorage = (username: string, task: Task): void => {
  const userTasks = getTasksFromLocalStorage(username);
  localStorage.setItem(username, JSON.stringify([...userTasks, task]));
};

export const updateTaskInLocalStorage = (
  username: string,
  taskID: string,
): void => {
  const userTasks = getTasksFromLocalStorage(username);

  const updateUserTasks = userTasks.map(item =>
    item.id === taskID ? { ...item, status: 'done' } : item,
  );

  localStorage.setItem(username, JSON.stringify(updateUserTasks));
};

export const removeTaskFromLocalStorage = (
  username: string,
  taskID: string,
): void => {
  const userTasks = getTasksFromLocalStorage(username);

  localStorage.setItem(
    username,
    JSON.stringify(userTasks.filter(item => item.id !== taskID)),
  );
};
