import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSideBarComponent } from './news-side-bar.component';

describe('NewsSideBarComponent', () => {
  let component: NewsSideBarComponent;
  let fixture: ComponentFixture<NewsSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
