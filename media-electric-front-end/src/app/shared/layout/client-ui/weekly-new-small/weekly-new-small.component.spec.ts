import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyNewSmallComponent } from './weekly-new-small.component';

describe('WeeklyNewSmallComponent', () => {
  let component: WeeklyNewSmallComponent;
  let fixture: ComponentFixture<WeeklyNewSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyNewSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyNewSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
