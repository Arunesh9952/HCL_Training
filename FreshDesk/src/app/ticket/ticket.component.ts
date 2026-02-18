import { Component, OnInit } from '@angular/core';
import { FreshdeskService } from '../fresh-desk.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  email = '';
  subject = '';
  description = '';

  tickets: any[] = [];

  editMode = false;
  editTicketId: number | null = null;

  constructor(private freshdesk: FreshdeskService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.freshdesk.getTickets().subscribe({
      next: (data: any) => (this.tickets = data),
      error: (err) => console.error(err),
    });
  }

  editTicket(ticket: any) {
    this.editMode = true;
    this.editTicketId = ticket.id;
    this.subject = ticket.subject;
    this.description = ticket.description_text;
  }

  saveTicket() {
    if (this.editMode) {
      this.updateTicket();
    } else {
      this.createTicket();
    }
  }

  createTicket() {
    const ticketData = {
      email: this.email,
      subject: this.subject,
      description: this.description,
      priority: 1,
      status: 2,
    };

    this.freshdesk.createTicket(ticketData).subscribe({
      next: () => {
        alert('Ticket Created');
        this.resetForm();
        this.loadTickets();
      },
      error: (err) => console.error(err),
    });
  }

  updateTicket() {
    if (!this.editTicketId) return;

    const ticketData = {
      subject: this.subject,
      description: this.description,
      priority: 1,
      status: 2,
    };

    this.freshdesk.updateTicket(this.editTicketId, ticketData).subscribe({
      next: () => {
        alert('Ticket Updated');
        this.resetForm();
        this.loadTickets();
      },
      error: (err) => console.error(err),
    });
  }

  deleteTicket(id: number) {
    if (!confirm('Delete ticket?')) return;

    this.freshdesk.deleteTicket(id).subscribe({
      next: () => {
        alert('Ticket Deleted');
        this.loadTickets();
      },
      error: (err) => console.error(err),
    });
  }

  resetForm() {
    this.email = '';
    this.subject = '';
    this.description = '';
    this.editMode = false;
    this.editTicketId = null;
  }
}
