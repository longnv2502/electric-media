import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsYoutubeComponent } from './news-youtube.component';

describe('NewsYoutubeComponent', () => {
  let component: NewsYoutubeComponent;
  let fixture: ComponentFixture<NewsYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
