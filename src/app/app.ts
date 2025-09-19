import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBar } from './components/header-bar/header-bar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameRating');

  public message = signal<string>('');
  
  onDeleteSelected(value:string): void {
    // Logica per eliminare i film selezionati
    this.message.set(value);
  }

  onAddNew(value:string): void {
    // Logica per aggiungere un nuovo film
    this.message.set(value);
  }
}
