import { Component, Input, ElementRef, } from '@angular/core';
import { Task } from '../task/task';
import { NewTask } from './new-task/new-task';
import { UserType } from '../app';
import { TasksService } from './tasks.service';
import { NewTaskType } from './types';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: UserType;
  isNewTaskStarted = false

  constructor(private tasksService: TasksService) { }

  getSelectedUserTasks() {
    return this.tasksService.getSelectedUserTasks(this.selectedUser.id);
  }

  newTaskStarted() {
    this.isNewTaskStarted = true
  }

  newTastCloase() {
    this.isNewTaskStarted = false
  }

  addNewTask(task: NewTaskType) {
    this.tasksService.addTask(task, this.selectedUser.id)
    this.tasksService.getSelectedUserTasks(this.selectedUser.id)
    this.isNewTaskStarted = false
  }
}


