// country-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent implements OnInit {
  country: any;

  constructor(private route: ActivatedRoute, private service: CountryService) {}

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.service.getCountryByCode(code).subscribe((data) => {
      this.country = data[0];
    });
  }
}
