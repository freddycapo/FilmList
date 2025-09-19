import { Component , input, signal} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilmCard } from '../../components/film-card/film-card';
import { RatingBar } from "../../components/rating-bar/rating-bar";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule, RatingBar],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  myForm = new FormGroup({
    title: new FormControl('' , Validators.required),
    description: new FormControl('' , Validators.required),
    date: new FormControl('' , Validators.required),
    image: new FormControl('' , Validators.required),
    rating : new FormControl()
  });

  public newFilm = signal<FilmCard | null>(null);

  onSubmit() {
    this.newFilm.set({
      title: this.myForm.value.title || '',
      description: this.myForm.value.description || '',
      date: this.myForm.value.date ? new Date(this.myForm.value.date , ) : new Date(),
      image: this.myForm.value.image || '',
      rating: this.myForm.value.rating
    });
    this.myForm.reset();
    console.log(this.newFilm());
  }

  onRatingChange(newRating: number): void {
    this.myForm.patchValue({ rating: newRating });
  }
  
}
