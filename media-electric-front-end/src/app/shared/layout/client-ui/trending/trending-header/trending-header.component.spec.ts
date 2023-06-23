import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHeaderComponent } from './trending-header.component';

describe('TrendingHeaderComponent', () => {
  let component: TrendingHeaderComponent;
  let fixture: ComponentFixture<TrendingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
