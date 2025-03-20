import Button from 'react-bootstrap/Button';

import { Priority, Task } from '@/types/task';

interface TaskRow extends Task {
  index: number;
  onDelete: () => void;
  onToggle: (id: string) => void;
}

export const TaskRow = ({
  id,
  name,
  status,
  priority,
  index,
  onDelete,
  onToggle,
}: TaskRow) => {
  const rowClass =
    status === 'done'
      ? 'table-secondary'
      : priority === Priority.Low
        ? 'table-success'
        : priority === Priority.Medium
          ? 'table-warning'
          : 'table-danger';

  const nameClass = status === 'done' ? 'text-decoration-line-through' : '';
  const statusText = status[0].toLocaleUpperCase() + status.slice(1);
  const toggleBtnVariant = status === 'done' ? 'warning' : 'success';

  return (
    <tr className={`${rowClass} p-2 bg-opacity-25`}>
      <td>{index}</td>
      <td className={nameClass}>{name}</td>
      <td>{statusText}</td>
      <td className="d-inline-flex gap-2 border-start-0">
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
        <Button variant={`${toggleBtnVariant}`} onClick={() => onToggle(id)}>
          {status === 'done' ? 'Undo Complete' : 'Complete'}
        </Button>
      </td>
    </tr>
  );
};
