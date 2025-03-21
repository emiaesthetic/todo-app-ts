import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import { Priority, Task } from '@/types/task';

interface TaskFormProps {
  task?: Task;
  onSave: (task: Task) => void;
}

const priorityVariants = {
  [Priority.Low]: 'success',
  [Priority.Medium]: 'warning',
  [Priority.High]: 'danger',
};

export const TaskForm = ({ task, onSave }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.Low);

  useEffect(() => {
    if (task) {
      setInputValue(task.name);
      setPriority(task.priority);
    }
  }, [task]);

  const dropdownVariant = priorityVariants[priority];

  const handleTask = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue('');
  };

  const createTask = (): Task => ({
    id: task?.id || crypto.randomUUID(),
    name: inputValue,
    status: 'process',
    priority: priority,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task = createTask();
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
        <Dropdown.Item key="low" onClick={() => setPriority(Priority.Low)}>
          {Priority.Low}
        </Dropdown.Item>
        <Dropdown.Item
          key="medium"
          onClick={() => setPriority(Priority.Medium)}
        >
          {Priority.Medium}
        </Dropdown.Item>
        <Dropdown.Item key="high" onClick={() => setPriority(Priority.High)}>
          {Priority.High}
        </Dropdown.Item>
      </DropdownButton>

      <Button
        className="btn btn-primary"
        type="submit"
        disabled={!inputValue.trim()}
      >
        {task ? 'Update' : 'Add'}
      </Button>

      <Button className="btn btn-warning" type="reset" onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
};
