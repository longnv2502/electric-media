import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutDetailComponent } from './profile-about-detail.component';

describe('ProfileAboutDetailComponent', () => {
  let component: ProfileAboutDetailComponent;
  let fixture: ComponentFixture<ProfileAboutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAboutDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
