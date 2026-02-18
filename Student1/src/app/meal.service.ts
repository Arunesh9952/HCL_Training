import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  apiUrl = 'http://localhost:5167/api/Meal';

  constructor(private http: HttpClient) {}

  searchMeals(name: string) {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }

  getMealArea(area: string) {
    return this.http.get<any>(`${this.apiUrl}/area/${area}`);
  }

  getMealCategory(category: string) {
    return this.http.get<any>(`${this.apiUrl}/category/${category}`);
  }
}
