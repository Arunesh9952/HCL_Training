import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor() {
    console.log("Share Service Constructor Called");
   }
  myfunction(){
    console.log("Hello from Share Service");
  }
}
