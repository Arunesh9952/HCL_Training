import { Injectable } from '@angular/core';
import { ShareserviceService } from './shareservice.service';

@Injectable({
  providedIn: 'root'
})
export class CalsService {

  constructor(private shrsrc: ShareserviceService) { }
  multiply(a:number,b:number):number{
    this.shrsrc.myfunction();
    return a*b;
  }
}
