import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../services/film-service';
import { FilmCard  , FilmCardComponent} from '../film-card/film-card';

@Component({
  selector: 'app-film-list-component',
  imports: [FilmCardComponent],
  templateUrl: './film-list-component.html',
  styleUrl: './film-list-component.css'
})
export class FilmListComponent implements OnInit {
  public films = signal<FilmCard[]>([]);
  private filmService = inject(FilmService);

  ngOnInit(): void {
    this.films.set(this.filmService.getFilms());
  }
}
