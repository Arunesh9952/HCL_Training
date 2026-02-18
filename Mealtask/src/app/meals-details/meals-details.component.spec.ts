import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MealDetailsComponent } from './meals-details/meals-details.component';
import { MealDetailsComponent } from './meals-details.component';


describe('MealDetailsComponent', () => {
  let component: MealDetailsComponent;
  let fixture: ComponentFixture<MealDetailsComponent>;  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealDetailsComponent]
    });
    fixture = TestBed.createComponent(MealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
