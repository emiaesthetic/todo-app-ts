import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { createPortal } from 'react-dom';

import Confirmation from '@/components/Confirmation';
import TaskRow from '@/components/TableRow';
import { Task } from '@/types/task';

interface TodoListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoList = ({ tasks, onDelete, onToggle }: TodoListProps) => {
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  if (taskToDelete) {
    return createPortal(
      <Confirmation
        onExecute={() => {
          onDelete(taskToDelete);
          setTaskToDelete(null);
        }}
        onCancel={() => setTaskToDelete(null)}
      />,
      document.body,
    );
  }

  return (
    <div>
      <Table className="align-middle" bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <TaskRow
              key={task.id}
              {...task}
              index={index + 1}
              onDelete={() => setTaskToDelete(task.id)}
              onToggle={onToggle}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
