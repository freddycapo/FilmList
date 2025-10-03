import { Component, forwardRef, input, output, signal } from '@angular/core';
import { Star } from '../star/star';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-bar',
  imports: [Star],
  templateUrl: './rating-bar.html',
  styleUrl: './rating-bar.css',
  providers: [
    {
      provide : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingBar),
      multi: true
    }
  ]
})
export class RatingBar {
  public maxRating = 5;
  
  public stars: number[] = Array.from({ length: this.maxRating }, (_ , i) => i+1);
  
  public rating = input<number>(0);
  public rating_change = output<number>();
  
  public isReadonly = false;
  
  onRatingChange(newRating: number) {
    if (!this.isReadonly) {
      this.rating_change.emit(this.rating());
    }
  }
}
