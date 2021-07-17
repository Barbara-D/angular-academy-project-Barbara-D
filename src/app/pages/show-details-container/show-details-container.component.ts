import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent{

  public constructor(private route:ActivatedRoute, private ShowService:ShowService) { }

  // public show: Show | undefined;
  public show$: Observable <Show | null> = this.route.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get("id");
      if (id)
      {
        return this.ShowService.getById(id);
      }
      return of(null);
    })
  );
 }
