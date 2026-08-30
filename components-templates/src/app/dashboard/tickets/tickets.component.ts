import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []

  onAdd({ title, request }: { title: string; request: string }) {
    const newTicket: Ticket = {
      id: new Date().toISOString(),
      title,
      request,
      status: Math.random() > 0.5 ? 'cloased' : 'open'
    }

    this.tickets.push(newTicket)
    console.log(this.tickets)
  }

  onComplete(id: string) {
    this.tickets = this.tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'cloased' } : ticket)
  }

}
