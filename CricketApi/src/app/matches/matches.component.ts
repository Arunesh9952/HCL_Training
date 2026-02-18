import { Component, OnInit } from '@angular/core';
import { CricketComponent } from '../cricket/cricket.component';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit{
  matches:any[]=[];
  searchText='';
  constructor(private service:CricketService){}
   ngOnInit(): void {
       this.service.getMatches().subscribe((res:any)=>{
          this.matches=res.data;
       });
   }


}
