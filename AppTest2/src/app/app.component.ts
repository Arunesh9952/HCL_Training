import { Component } from '@angular/core';
import { CalsService } from '../app/cals.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppTest2';
}
