import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBar } from './components/header-bar/header-bar';
import { FilmCard, FilmCardComponent } from './components/film-card/film-card'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBar, FilmCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameRating');

  public cards = signal<FilmCard[]>([
    { title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.', date: new Date('2010-07-16'), image: 'https://m.media-amazon.com/images/I/51s+4G+P9-L._AC_SY445_.jpg' },
    { title: 'The Matrix', description: 'A hacker discovers the true nature of reality.', date: new Date('1999-03-31'), image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg' },
    { title: 'Interstellar', description: 'A journey through space and time to save humanity.', date: new Date('2014-11-07'), image: 'https://m.media-amazon.com/images/I/71n58v6KJgL._AC_SY679_.jpg' }
  ])

  public message = signal<string>('');
 
   onDeleteSelected(value:string): void {
    // Logica per eliminare i film selezionati
    this.message.set(value);
    // Esempio: this.filmService.deleteSelectedFilms();
  }

  onAddNew(value:string): void {
    // Logica per aggiungere un nuovo film
    this.message.set(value);

    // Esempio: aprire un modal o navigare a una pagina di creazione
    // this.router.navigate(['/films/new']);
    // oppure this.openAddFilmModal();
  }
}
