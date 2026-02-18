import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalsService {

  constructor() { }
  calculate(a: number, b: number): number {
    return a + b;
  }
}
