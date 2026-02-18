import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
})
export class MealsComponent implements OnInit {
  meals: any[] = [];

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit() {
    this.searchByName('Arrabiata');
  }

  searchByName(name: string) {
    this.mealService.getMeals(name).subscribe((res: any) => {
      this.meals = res.meals;
    });
  }

  searchByLetter(letter: string) {
    this.mealService.getMealsByFirstLetter(letter).subscribe((res: any) => {
      this.meals = res.meals;
    });
  }

  viewDetails(id: string) {
    this.router.navigate(['/meal', id]);
  }
}
