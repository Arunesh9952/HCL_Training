import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];
  constructor(private countryService: CountryService) { }
  ngOnInit(): void {
      this.countryService.getCountries().subscribe((response) => {
      this.countries = response;
    });
  }

}
