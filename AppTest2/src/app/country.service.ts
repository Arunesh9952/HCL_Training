import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url =
    'https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/alpha/' + code);
  }
}



