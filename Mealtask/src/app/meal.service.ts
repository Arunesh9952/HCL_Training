import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getMeals(name: string = ''): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search.php?s=${name}`);
  }

  getMealsByFirstLetter(letter: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search.php?f=${letter}`);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/filter.php?c=${category}`);
  }

  getMealsByArea(area: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/filter.php?a=${area}`);
  }

  getMealById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`);
  }
}
