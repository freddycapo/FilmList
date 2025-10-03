import { Component  , signal} from '@angular/core';
import { FilmListComponent } from '../../components/film-list-component/film-list-component'; 

@Component({
  selector: 'app-home',
  imports: [FilmListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  

}
