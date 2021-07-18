import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reviews-empty',
  templateUrl: './reviews-empty.component.html',
  styleUrls: ['./reviews-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
