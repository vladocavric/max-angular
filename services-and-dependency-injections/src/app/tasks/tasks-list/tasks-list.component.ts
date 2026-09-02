import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, TaskStatus } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<TaskStatus | 'ALL'>('ALL');
  private tasksService = inject(TasksService)

  taskStatusOptions = inject(TASK_STATUS_OPTIONS)

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'ALL':
        return this.tasksService.allTasks();
      case 'OPEN':
        return this.tasksService
          .allTasks()
          .filter(task => task.status === 'OPEN');
      case 'IN_PROGRESS':
        return this.tasksService
          .allTasks()
          .filter(task => task.status === 'IN_PROGRESS');
      case 'DONE':
        return this.tasksService
          .allTasks()
          .filter(task => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });
  onChangeTasksFilter(filter: string) {
    if (filter === 'ALL' || filter === 'OPEN' || filter === 'IN_PROGRESS' || filter === 'DONE') {
      this.selectedFilter.set(filter);
    }
  }
}
