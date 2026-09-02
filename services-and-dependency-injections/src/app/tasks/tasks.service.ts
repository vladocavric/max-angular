import { computed, inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService)

  createTask({ title, description }: { title: string; description: string; }) {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: "OPEN"
    }
    this.tasks.update(oldTasks => [...oldTasks, newTask]);
    this.loggingService.log('Task created: ' + title);
  }

  allTasks = this.tasks.asReadonly();

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update(tasks => {
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        task.status = newStatus;
        this.loggingService.log(`Task status updated: ${task.title} - ${newStatus}`);
      }
      return tasks;
    });
  }
}
