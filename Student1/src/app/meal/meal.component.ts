import { Component } from '@angular/core';
import { MealService } from '../meal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meal.component.html',
})
export class MealComponent {
  searchText: string = '';
  areaText: string = '';
  categoryText: string = '';
  meals: any[] = [];

  constructor(private mealService: MealService) {}

  search() {
    if (!this.searchText) return;

    this.mealService.searchMeals(this.searchText).subscribe((res) => {
      this.meals = res?.meals || [];
    });
  }

  getByArea() {
    if (!this.areaText) return;

    this.mealService.getMealArea(this.areaText).subscribe((res) => {
      this.meals = res?.meals || [];
    });
  }

  getByCategory() {
    if (!this.categoryText) return;

    this.mealService.getMealCategory(this.categoryText).subscribe((res) => {
      this.meals = res?.meals || [];
    });
  }
}
