import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent implements OnInit {

  // public shows: Array<Show>;
  public shows$: Observable<Array<Show>> = this.ShowService.getTopRated();
  constructor(private ShowService:ShowService) { }

  ngOnInit(): void {
    // this.shows=this.ShowService.getTopRated();
  }

}
