import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent {
    
   match:any;
   constructor(
    private route:ActivatedRoute,
    private service:CricketService
   ){}

   ngOnInit(): void {
      const matchid=this.route.snapshot.paramMap.get('id');
      this.service.getMatches().subscribe((res:any)=>{
        this.match = res.data.find((x: any) => x.id == matchid);
      });

   }
}
