import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CricketService {
  private url = './assets/cricket.json';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getMatchById(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
