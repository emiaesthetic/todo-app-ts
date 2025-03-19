import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Task } from '@/types/task';

interface TaskFormProps {
  onSave: (task: Task) => void;
}

export const TaskForm = ({ onSave }: TaskFormProps) => {
  const [taskName, setTaskName] = useState<string>('');

  const handleTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleReset = () => {
    setTaskName('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: Task = {
      id: crypto.randomUUID(),
      name: taskName,
    };

    onSave(task);
    setTaskName('');
  };

  return (
    <Form
      className="d-flex align-items-center gap-3 mb-3"
      onSubmit={handleSubmit}
    >
      <Form.Control
        name="name"
        id="name"
        value={taskName}
        onChange={handleTask}
        placeholder="Enter task"
      />
      <Button
        className="btn btn-primary"
        type="submit"
        disabled={!taskName.trim()}
      >
        Add
      </Button>
      <Button className="btn btn-warning" type="reset" onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
};
