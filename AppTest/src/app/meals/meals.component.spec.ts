import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsComponent } from './meals.component';

describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsComponent],
    });
    fixture = TestBed.createComponent(MealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct sum from calculate method', () => {
    const result = component.calculate(4, 6);
    expect(result).toBe(10);
  });
});
