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
      title: "Game of Thrones",
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      averageRating: 4.6,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    },
    {
      title: "The Good Place",
      description: "Due to an error, self-absorbed Eleanor Shellstrop arrives at the Good Place after her death. Determined to stay, she tries to become a better person.",
      averageRating: 4.1,
      imageUrl: "https://m.media-amazon.com/images/I/71PijMzuaHL._AC_SX466_.jpg",
    },    
    {
      title: "Buffy the Vampire Slayer",
      description: "A young woman, destined to slay vampires, demons and other infernal creatures, deals with her life fighting evil, with the help of her friends.",
      averageRating: 4.1,
      imageUrl: "https://paramountnetwork.mtvnimages.com/uri/mgid:arc:content:web.paramountplus.it:14013944-c312-42f4-a0d6-ec440804ccdd?quality=0.7",
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
