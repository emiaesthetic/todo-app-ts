import Table from 'react-bootstrap/Table';

import TaskRow from '@/components/TableRow';
import { Task } from '@/types/task';

interface TodoListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export const TodoList = ({ tasks, onDelete, onComplete }: TodoListProps) => {
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
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
