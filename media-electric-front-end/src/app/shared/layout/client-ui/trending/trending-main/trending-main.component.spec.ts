import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMainComponent } from './trending-main.component';

describe('TrendingMainComponent', () => {
  let component: TrendingMainComponent;
  let fixture: ComponentFixture<TrendingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
