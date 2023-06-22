import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyNewBigComponent } from './weekly-new-big.component';

describe('WeeklyNewBigComponent', () => {
  let component: WeeklyNewBigComponent;
  let fixture: ComponentFixture<WeeklyNewBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyNewBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyNewBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
