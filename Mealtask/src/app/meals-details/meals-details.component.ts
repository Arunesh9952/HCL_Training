// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MealService } from '../meal.service';

// @Component({
//   selector: 'app-meal-details',

//   templateUrl: './meal-details.component.html',
// })
// export class MealDetailsComponent implements OnInit {
//   meal: any;

//   constructor(
//     private route: ActivatedRoute,
//     private mealService: MealService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id')!;
//     this.mealService.getMealById(id).subscribe((res: any) => {
//       this.meal = res.meals[0];
//     });
//   }

//   goBack() {
//     this.router.navigate(['/meals']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.css'],
})
export class MealDetailsComponent implements OnInit {
  meal: any;
  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.mealService.getMeals(id).subscribe((res: any) => {
      this.meal = res.meals[0];
    });
  }

  ngOnInit(): void {}
  goBack() {
    this.router.navigate(['/meals']);
  }
}
