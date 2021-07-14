import { Injectable } from '@angular/core';
import { Show } from './show/show.model'; 

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private rawData: Array<any> = [
    {
      id: "1",
      title: "Black Mirror",
      description: "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
      averageRating: 4.4,
      imageUrl: "https://i.redd.it/bg1hqtnr1x301.jpg",
    },
    {
      id: "2",
      title: "Lost",
      description: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
      averageRating: 4.2,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41cv66E9qvL._AC_.jpg",
    },  
    {
      id: "3",
      title: "Buffy the Vampire Slayer",
      description: "A young woman, destined to slay vampires, demons and other infernal creatures, deals with her life fighting evil, with the help of her friends.",
      averageRating: 4.1,
      imageUrl: "https://paramountnetwork.mtvnimages.com/uri/mgid:arc:content:web.paramountplus.it:14013944-c312-42f4-a0d6-ec440804ccdd?quality=0.7",
    },    

    {
      id: "4",
      title: "Game of Thrones",
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      averageRating: 4.6,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    },    
    {
      id: "5",
      title: "The Good Place",
      description: "Due to an error, self-absorbed Eleanor Shellstrop arrives at the Good Place after her death. Determined to stay, she tries to become a better person.",
      averageRating: 4.2,
      imageUrl: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL0805_bfea15f4-1379-42e6-b227-7e3e0d5f93ee_1024x1024.jpg?v=1571445240",
    },    
    {
      id: "6",
      title: "How to Get Away with Murder",
      description: "A group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives.",
      averageRating: 3.9,
      imageUrl: "https://thecentraltrend.com/wp-content/uploads/2020/02/how-to-get-away-murder-season-2-thatgrapejuice-600x800-1.jpg",
    },    
  ];


  constructor() { }

  getShows (): Array<Show>{
    return this.rawData.map((rawShowData)=> new Show(rawShowData));
  }

  getTopRated (): Array<Show>{
    return this.getShows().filter((show: Show) => show.averageRating>4)
  }

  getById (id: string): Show | undefined { 
    return this.getShows().find((show: Show) => show.id === id);
  }
}

