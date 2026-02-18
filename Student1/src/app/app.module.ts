import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { MealComponent } from './meal/meal.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StudentComponent,
    MealComponent,
    CountryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
