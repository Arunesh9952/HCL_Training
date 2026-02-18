import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes  } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AboutComponent } from './about/about.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: AllCountriesComponent },
  { path: 'countrycode', component: CountryDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailsComponent,
    AboutComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
