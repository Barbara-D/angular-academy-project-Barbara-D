import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
@Component({
  selector: 'app-all-shows-container',
  templateUrl: './all-shows-container.component.html',
  styleUrls: ['./all-shows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllShowsContainerComponent implements OnInit {

  rawData: Array<any> = [
    {
      title: "Black Mirror",
      description: "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
      averageRating: 4.4,
      imageUrl: "https://i.redd.it/bg1hqtnr1x301.jpg",
    },
    {
      title: "Show 2",
      description: "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
      averageRating: 4.4,
      imageUrl: "https://i.redd.it/bg1hqtnr1x301.jpg",
    },
  ];


  constructor() { }
  
  shows: Array<Show>;

  ngOnInit() {
    this.shows = this.rawData.map((rawShowData)=>{
      return new Show(rawShowData);
    });
  }
}
