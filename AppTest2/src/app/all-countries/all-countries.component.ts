// all-countries.component.ts
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
})
export class AllCountriesComponent implements OnInit {
  countries: any[] = [];
  searchText = '';

  constructor(private service: CountryService, private router: Router) {}

  ngOnInit() {
    this.service.getCountries().subscribe((data: any[]) => {
      this.countries = data;
    });
  }

  filteredCountries() {
    const search = this.searchText.toLowerCase();

    return this.countries.filter(
      (c) =>
        c.name?.common?.toLowerCase().includes(search) ||
        c.cca3?.toLowerCase().includes(search) ||
        c.capital?.[0]?.toLowerCase().includes(search)
    );
  }

  goToDetails(code: string) {
    this.router.navigate(['/country', code]);
  }
}
