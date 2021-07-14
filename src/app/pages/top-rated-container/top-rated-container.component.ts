import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent implements OnInit {

  shows: Array<Show>;
  constructor(private ShowService:ShowService) { }

  ngOnInit(): void {
    this.shows=this.ShowService.getTopRated();
  }

}
