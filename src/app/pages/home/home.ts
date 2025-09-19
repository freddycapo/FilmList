import { Component  , signal} from '@angular/core';
import { FilmCard, FilmCardComponent } from '../../components/film-card/film-card';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public cards = signal<FilmCard[]>([
    //{ title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.', date: new Date('2010-07-16'), image: 'https://m.media-amazon.com/images/I/51s+4G+P9-L._AC_SY445_.jpg' },
    { title: 'The Matrix', description: 'A hacker discovers the true nature of reality.', date: new Date('1999-03-31'), image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg' },
    //{ title: 'Interstellar', description: 'A journey through space and time to save humanity.', date: new Date('2014-11-07'), image: 'https://m.media-amazon.com/images/I/71n58v6KJgL._AC_SY679_.jpg' }
  ]);

  public message = signal<string>('');

}
