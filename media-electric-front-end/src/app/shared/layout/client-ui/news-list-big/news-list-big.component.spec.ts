import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListBigComponent } from './news-list-big.component';

describe('NewListBigComponent', () => {
  let component: NewsListBigComponent;
  let fixture: ComponentFixture<NewsListBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
