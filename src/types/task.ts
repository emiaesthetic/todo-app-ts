export type Status = 'process' | 'done';

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export interface Task {
  id: string;
  name: string;
  status: Status;
  priority: Priority;
}
