import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-placeholder',
  templateUrl: './profile-placeholder.component.html',
  styleUrls: ['./profile-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
