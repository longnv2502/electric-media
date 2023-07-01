import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutEditComponent } from './profile-about-edit.component';

describe('ProfileAboutEditComponent', () => {
  let component: ProfileAboutEditComponent;
  let fixture: ComponentFixture<ProfileAboutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAboutEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAboutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
