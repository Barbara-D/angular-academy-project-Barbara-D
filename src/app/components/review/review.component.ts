import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Iuser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent{
  @Input() comment: string;
  @Input() rating: number;
  @Input() user: any;

}
