import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meals-details/meals-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'meals1', component: MealDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
