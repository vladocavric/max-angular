import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}


export interface TaskOptions {
  value: 'open' | 'in_progress' | 'done';
  taskStatus: TaskStatus;
  text: 'Open' | 'In Progress' | 'Done';

}

export const TaskStatusOptions: TaskOptions[] = [
  { value: 'open', taskStatus: 'OPEN', text: 'Open' },
  { value: 'in_progress', taskStatus: 'IN_PROGRESS', text: 'In Progress' },
  { value: 'done', taskStatus: 'DONE', text: 'Done' }
]

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskOptions[]>('task-status-options')

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions
}