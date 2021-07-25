import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-shows-container',
  templateUrl: './all-shows-container.component.html',
  styleUrls: ['./all-shows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllShowsContainerComponent implements OnInit {

  // public shows: Array<Show>;

  public shows$: Observable<Array<Show>> = this.ShowService.getShows();
  public constructor(private ShowService:ShowService) {}
  

  ngOnInit(): void {
    // this.ShowService.getShows().subscribe((shows) => this.shows=shows)
    // this.shows.forEach((show) => show.calculatePercentage()); 
  }
}
