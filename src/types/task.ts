type Status = 'process' | 'done';

export interface Task {
  id: string;
  name: string;
  status: Status;
}
