import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperCommentComponent } from './newspaper-comment.component';

describe('NewsCommentComponent', () => {
  let component: NewspaperCommentComponent;
  let fixture: ComponentFixture<NewspaperCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
