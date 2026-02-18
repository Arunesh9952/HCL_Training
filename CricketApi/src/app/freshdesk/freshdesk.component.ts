import { Component } from '@angular/core';
import { FreshdeskService } from '../fresh-desk.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent {
  ticket: any = {};

  constructor(private freshdesk: FreshdeskService) {}

  createTicket() {
    // BEFORE PROCESS VALIDATION
    if (
      !this.ticket.email ||
      !this.ticket.subject ||
      !this.ticket.description
    ) {
      alert('Fill all fields');
      return;
    }

    const payload = {
      email: this.ticket.email,
      subject: this.ticket.subject,
      description: this.ticket.description,
      status: 2,
      priority: 1,
    };

    this.freshdesk.createTicket(payload).subscribe((res) => {
      console.log('Ticket Created', res);
    });
  }
}
