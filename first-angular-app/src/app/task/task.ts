import { Component, inject, Input, } from '@angular/core';
import { DatePipe } from '@angular/common'
import { TasksService } from '../tasks/tasks.service';

type TaskType = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {
  @Input({ required: true }) task!: TaskType;

  private tasksService = inject(TasksService)


  onCompleteTask(): void {
    this.tasksService.completeTask(this.task.id);
  }
}
