import { Task } from '@/types/task';

interface TaskRow extends Task {
  index: number;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TaskRow = ({
  id,
  name,
  status,
  index,
  onDelete,
  onToggle,
}: TaskRow) => {
  const rowClass = status === 'done' ? 'table-success' : 'table-light';
  const nameClass = status === 'done' ? 'text-decoration-line-through' : '';
  const statusText = status[0].toLocaleUpperCase() + status.slice(1);
  const toggleBtnClass = status === 'done' ? 'btn-warning' : 'btn-success';

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
          className={`btn ${toggleBtnClass}`}
          onClick={() => onToggle(id)}
        >
          {status === 'done' ? 'Undo Complete' : 'Complete'}
        </button>
      </td>
    </tr>
  );
};
