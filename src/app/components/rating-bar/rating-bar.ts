import { Component, output, signal } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-rating-bar',
  imports: [Star],
  templateUrl: './rating-bar.html',
  styleUrl: './rating-bar.css'
})
export class RatingBar {
  public maxRating = 5;
  
  public stars: number[] = Array.from({ length: this.maxRating }, (_ , i) => i+1);
  
  public rating = signal<number>(0);

  updateRating(newRating: number): void {
    this.rating.set(newRating);
    console.log("Updated rating to:", this.rating());
  }
  
}
