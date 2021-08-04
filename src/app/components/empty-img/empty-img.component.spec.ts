import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyImgComponent } from './empty-img.component';

describe('EmptyImgComponent', () => {
  let component: EmptyImgComponent;
  let fixture: ComponentFixture<EmptyImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
