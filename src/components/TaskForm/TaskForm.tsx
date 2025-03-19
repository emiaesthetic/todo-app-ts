import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Task } from '@/types/task';

interface TaskFormProps {
  onSave: (task: Task) => void;
}

export const TaskForm = ({ onSave }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleTask = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: Task = {
      id: crypto.randomUUID(),
      name: inputValue,
      status: 'process',
    };

    onSave(task);
    setInputValue('');
  };

  return (
    <Form
      className="d-flex align-items-center gap-3 mb-3"
      onSubmit={handleSubmit}
    >
      <Form.Control
        name="name"
        id="name"
        value={inputValue}
        onChange={handleTask}
        placeholder="Enter task"
      />
      <Button
        className="btn btn-primary"
        type="submit"
        disabled={!inputValue.trim()}
      >
        Add
      </Button>
      <Button className="btn btn-warning" type="reset" onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
};
