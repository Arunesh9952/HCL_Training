import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url =
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,area,flags';

  constructor(private http: HttpClient) {}
  getCountries() {
    return this.http.get<any>(this.url);
  }
}
