import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatNewsComponent } from './what-news.component';

describe('WhatNewsComponent', () => {
  let component: WhatNewsComponent;
  let fixture: ComponentFixture<WhatNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
