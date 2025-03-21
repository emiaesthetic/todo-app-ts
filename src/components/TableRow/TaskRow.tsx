import Button from 'react-bootstrap/Button';

import { Priority, Task } from '@/types/task';

interface TaskRow extends Task {
  index: number;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: (id: string) => void;
}

const priorityClasses = {
  [Priority.Low]: 'table-success',
  [Priority.Medium]: 'table-warning',
  [Priority.High]: 'table-danger',
};

export const TaskRow = ({
  id,
  name,
  status,
  priority,
  index,
  onEdit,
  onDelete,
  onToggle,
}: TaskRow) => {
  const rowClass =
    status === 'done' ? 'table-secondary' : priorityClasses[priority];
  const nameClass = status === 'done' ? 'text-decoration-line-through' : '';
  const statusText = status[0].toLocaleUpperCase() + status.slice(1);
  const toggleBtnVariant = status === 'done' ? 'warning' : 'success';

  return (
    <tr className={`${rowClass} h-auto p-2 bg-opacity-25`}>
      <td>{index}</td>
      <td className={nameClass}>{name}</td>
      <td>{statusText}</td>
      <td className="d-inline-flex gap-2 border-start-0">
        <Button key="edit" variant="primary" onClick={onEdit}>
          Edit
        </Button>

        <Button key="delete" variant="danger" onClick={onDelete}>
          Delete
        </Button>

        <Button
          key="toggle"
          variant={`${toggleBtnVariant}`}
          onClick={() => onToggle(id)}
          style={{ width: '150px' }}
        >
          {status === 'done' ? 'Undo Complete' : 'Complete'}
        </Button>
      </td>
    </tr>
  );
};
