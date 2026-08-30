import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';


@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>()
  isOpen = signal<Boolean>(false)
  complete = output()

  onToggleOppen() {
    // this.isOpen.set(!this.isOpen())
    this.isOpen.update(visible => !visible)
  }

  onComplete() {
    this.complete.emit()
  }
}
