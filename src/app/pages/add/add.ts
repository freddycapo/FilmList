import { Component , inject, model} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilmCard } from '../../components/film-card/film-card';
import { FilmService } from '../../services/film-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule ],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  router = inject(Router);
  myForm = new FormGroup({
    title: new FormControl('' , Validators.required),
    description: new FormControl('' , Validators.required),
    genere: new FormControl('' , Validators.required),
    date: new FormControl(new Date() , Validators.required),
    image: new FormControl('' , Validators.required),
    rating : new FormControl(0 , Validators.required)
  });

  public formRating = model<number>(0);

  filmService = inject(FilmService);

  constructor() {}

  onSubmit() {
    if(this.myForm.invalid) {
      alert("Please fill all required fields.");
      return;
    }
    this.filmService.addFilm(this.myForm.value as FilmCard);
    console.log("Film added:", this.myForm.value);
    this.router.navigate(['/']);
  }

  onRatingChange(newRating: number): number {
    //this.rating.set(newRating);
    console.log("New rating received in Add component:", newRating);
    return newRating;
  }
  
}
