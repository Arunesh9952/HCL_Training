import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FreshdeskService {
  private domain = 'https://yourcompany.freshdesk.com/api/v2';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  createTicket(data: any) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.apiKey + ':X'),
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.domain}/tickets`, data, { headers });
  }
}
