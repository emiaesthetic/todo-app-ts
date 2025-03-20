import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import { Priority, Task } from '@/types/task';

interface TaskFormProps {
  onSave: (task: Task) => void;
}

export const TaskForm = ({ onSave }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.Low);

  const dropdownVariant =
    priority === Priority.Low
      ? 'success'
      : priority === Priority.Medium
        ? 'warning'
        : 'danger';

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
      priority: priority,
    };

    onSave(task);
    setInputValue('');
    setPriority(Priority.Low);
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

      <DropdownButton
        variant={dropdownVariant}
        id="dropdown-basic-button"
        title={priority}
      >
        <Dropdown.Item onClick={() => setPriority(Priority.Low)}>
          {Priority.Low}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setPriority(Priority.Medium)}>
          {Priority.Medium}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setPriority(Priority.High)}>
          {Priority.High}
        </Dropdown.Item>
      </DropdownButton>

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
