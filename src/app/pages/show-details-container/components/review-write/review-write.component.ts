import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReview } from 'src/app/interfaces/review.interface';

@Component({
  selector: 'app-review-write',
  templateUrl: './review-write.component.html',
  styleUrls: ['./review-write.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewWriteComponent implements OnInit {
  @Output() addReview: EventEmitter<IReview>=new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  public reviewFormGroup: FormGroup = this.fb.group({
    comment: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  onSubmit(): void{
    this.addReview.emit(this.reviewFormGroup.value);
    this.reviewFormGroup.reset();
  };
}
