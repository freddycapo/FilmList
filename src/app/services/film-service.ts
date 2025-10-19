import { Injectable , Signal, signal} from '@angular/core';
import { FilmCard } from '../components/film-card/film-card';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films = signal<FilmCard[]>([]);
  public nextId = signal<number>(1);

  getFilms() : FilmCard[] {
    return this.films();
  }
  
  addFilm(film: FilmCard) : void {
    film.id = this.nextId();
    this.nextId.set(this.nextId() + 1);
    this.films.update(films => [...films, film]);
  }

  getFilmById(id: number) : FilmCard | undefined {
    return this.films().find(film => film.id === id);
  }

  updateFilm(updatedFilm: FilmCard) : void {
    this.films.update(films => films.map(film => film.id === updatedFilm.id ? updatedFilm : film));
  }

}
