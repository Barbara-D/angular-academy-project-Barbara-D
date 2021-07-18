import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent{
  @Input() comment: string;
  @Input() rating: number;

}
