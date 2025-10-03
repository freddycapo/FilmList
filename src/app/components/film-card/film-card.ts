// film-card.component.ts
import { Component, input} from '@angular/core';
import { RatingBar } from "../rating-bar/rating-bar";
import { DatePipe } from '@angular/common';

export interface FilmCard {
  id: number;
  title:string;
  description:string;
  date:Date;
  image:string;
  genere:string;
  rating: number; 
}

@Component({
  selector: 'app-film-card',
  imports: [RatingBar , DatePipe],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css'
})
export class FilmCardComponent {
  filmcard = input.required<FilmCard>();
}
