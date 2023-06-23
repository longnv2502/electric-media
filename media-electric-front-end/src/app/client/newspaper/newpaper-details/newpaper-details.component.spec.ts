import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaperDetailsComponent } from './newpaper-details.component';

describe('NewpaperDetailsComponent', () => {
  let component: NewpaperDetailsComponent;
  let fixture: ComponentFixture<NewpaperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpaperDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
