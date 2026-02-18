import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FreshdeskService {
  private domain = 'https://kceac9958.freshdesk.com';
  private apiKey = 'ZQ-Cp1M3FNMu6_ryn_sj';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.apiKey + ':X'),
      'Content-Type': 'application/json',
    });
  }

  getTickets() {
    const url = `${this.domain}/api/v2/tickets?include=requester`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  createTicket(data: any) {
    const url = `${this.domain}/api/v2/tickets`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

  updateTicket(id: number, data: any) {
    return this.http.put(`${this.domain}/api/v2/tickets/${id}`, data, {
      headers: this.getHeaders(),
    });
  }

  deleteTicket(id: number) {
    return this.http.delete(`${this.domain}/api/v2/tickets/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
  

