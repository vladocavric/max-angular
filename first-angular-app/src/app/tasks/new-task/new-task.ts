import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() newTaskCloase = new EventEmitter<void>()
  @Input({ required: true }) userId!: string;

  private tasksService = inject(TasksService)


  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')

  onNewTaskCloase() {
    this.newTaskCloase.emit()
  }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId)
    this.tasksService.getSelectedUserTasks(this.userId)
    this.newTaskCloase.emit()
  }
}
