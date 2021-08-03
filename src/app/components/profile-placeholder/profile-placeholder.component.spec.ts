import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePlaceholderComponent } from './profile-placeholder.component';

describe('ProfilePlaceholderComponent', () => {
  let component: ProfilePlaceholderComponent;
  let fixture: ComponentFixture<ProfilePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
