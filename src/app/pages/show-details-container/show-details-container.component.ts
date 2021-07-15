import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent implements OnInit {

  public constructor(private route:ActivatedRoute, private ShowService:ShowService) { }

  public show: Show | undefined;
  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get("id");

    if (id)
    {
      this.show = this.ShowService.getById(id);

    }
  }

}
