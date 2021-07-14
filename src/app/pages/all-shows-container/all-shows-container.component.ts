import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-all-shows-container',
  templateUrl: './all-shows-container.component.html',
  styleUrls: ['./all-shows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllShowsContainerComponent implements OnInit {
  
  shows: Array<Show>;
  constructor(private ShowService:ShowService) { }
  

  ngOnInit() {
    this.shows = this.ShowService.getShows ();
    this.shows.forEach((show) => show.calculatePercentage()); 
  }
}
