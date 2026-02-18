import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailsComponent } from './meals-details/meals-details.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MealsComponent,
    MealDetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
