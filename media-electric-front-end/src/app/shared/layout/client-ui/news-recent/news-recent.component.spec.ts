import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecentComponent } from './news-recent.component';

describe('NewsRecentComponent', () => {
  let component: NewsRecentComponent;
  let fixture: ComponentFixture<NewsRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
