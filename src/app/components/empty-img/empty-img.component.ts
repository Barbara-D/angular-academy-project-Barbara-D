import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empty-img',
  templateUrl: './empty-img.component.html',
  styleUrls: ['./empty-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
