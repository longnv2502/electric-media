import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListSmallComponent } from './news-list-small.component';

describe('NewListSmallComponent', () => {
  let component: NewsListSmallComponent;
  let fixture: ComponentFixture<NewsListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
