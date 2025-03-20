import { Task } from '@/types/task';

interface TaskRow extends Task {
  index: number;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export const TaskRow = ({
  id,
  name,
  status,
  index,
  onDelete,
  onComplete,
}: TaskRow) => {
  const rowClass = status === 'done' ? 'table-success' : 'table-light';
  const nameClass = status === 'done' ? 'text-decoration-line-through' : '';
  const statusText = status[0].toLocaleUpperCase() + status.slice(1);

  return (
    <tr className={`${rowClass} p-2`}>
      <td>{index}</td>
      <td className={nameClass}>{name}</td>
      <td>{statusText}</td>
      <td className="d-inline-flex gap-2 border-start-0">
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button
          className="btn btn-success"
          onClick={() => onComplete(id)}
          disabled={status === 'done'}
        >
          Complete
        </button>
      </td>
    </tr>
  );
};
