import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsEmptyComponent } from './reviews-empty.component';

describe('ReviewsEmptyComponent', () => {
  let component: ReviewsEmptyComponent;
  let fixture: ComponentFixture<ReviewsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
