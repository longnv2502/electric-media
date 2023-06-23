import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperContentComponent } from './newspaper-content.component';

describe('NewsContentComponent', () => {
  let component: NewspaperContentComponent;
  let fixture: ComponentFixture<NewspaperContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
