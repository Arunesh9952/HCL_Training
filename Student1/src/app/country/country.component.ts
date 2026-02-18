import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.component.html',
})
export class CountryComponent {
  searchText: string = '';
  capitalText: string = '';
  regionText: string = '';
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  
  search() {
    if (!this.searchText) return;

    this.countryService.searchCountry(this.searchText).subscribe((res) => {
      this.countries = res || [];
    });
  }

  
  getCapital() {
    if (!this.capitalText) return;

    this.countryService.getCapital(this.capitalText).subscribe((res) => {
      this.countries = res || [];
    });
  }


  getRegion() {
    if (!this.regionText) return;

    this.countryService.getRegion(this.regionText).subscribe((res) => {
      this.countries = res || [];
    });
  }
}
