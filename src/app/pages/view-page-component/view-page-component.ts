import { Component, inject, OnInit, signal } from '@angular/core';
import { RatingBar } from "../../components/rating-bar/rating-bar";
import { FilmService } from '../../services/film-service';
import { FilmCard } from '../../components/film-card/film-card';

@Component({
  selector: 'app-view-page-component',
  imports: [RatingBar],
  templateUrl: './view-page-component.html',
  styleUrl: './view-page-component.css'
})

export class ViewPageComponent implements OnInit {
  
  filmService = inject(FilmService);

  public filmToView = signal<FilmCard | null>(null);

  ngOnInit(): void {
    this.filmToView.set(this.filmService.getFilmById(1) ?? null);
  }

  

}

