import { Component, OnInit } from '@angular/core';
import { MealService } from '../meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent  {
  // meals: any[] = [];
  // constructor(private mealSerivice: MealService) {}
  // ngOnInit(): void {
  //   this.mealSerivice.getMeals().subscribe((response) => {
  //     this.meals = response.meals;
  //   });
  // }
    calculate(a: number, b: number): number {
    return a + b;
  }

 
}
