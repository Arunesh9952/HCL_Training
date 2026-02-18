import { Component } from '@angular/core';
import { CalsService } from '../cals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  a = 3;
  b = 4;
  result = 0;
  constructor(private mathService: CalsService) {}
  doMultiply() {
    this.result = this.mathService.multiply(this.a, this.b);
    console.log(this.result);
  }
}
