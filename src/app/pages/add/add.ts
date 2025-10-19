import { Component , inject, model, OnInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilmCard } from '../../components/film-card/film-card';
import { FilmService } from '../../services/film-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule , RouterLink ],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add implements OnInit {
  
  private route = inject(ActivatedRoute);
  router = inject(Router);
  filmService = inject(FilmService);
  
  myForm = new FormGroup({
    title: new FormControl('' , Validators.required),
    description: new FormControl('' , Validators.required),
    genere: new FormControl('' , Validators.required),
    date: new FormControl(new Date() , Validators.required),
    image: new FormControl('' , Validators.required),
    rating : new FormControl(0 , Validators.required)
  });

  public formRating = model<number>(0);
  public Editmode = false;
  public filmID: number | null = null;

  constructor() {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');  // Get the 'id' parameter from the route
      if (idParam == null) {
        this.Editmode = false;
        return;
      } else{
        this.Editmode = true;
        this.filmID = +idParam; // Convert the 'id' parameter to a number
        this.loadFilmData(this.filmID);
      }
    });
  }


  onSubmit() {
    if(this.myForm.invalid) {
      alert("Please fill all required fields.");
      return;
    }
    // If in edit mode, update the existing film
    // if(this.Editmode && this.filmID != null) {
    //  this.filmService.updateFilm(this.filmID, this.myForm.value as FilmCard);
    this.filmService.addFilm(this.myForm.value as FilmCard);
    console.log("Film added:", this.myForm.value);
    this.router.navigate(['/']);
  }

  onRatingChange(newRating: number): number {
    //this.rating.set(newRating);
    console.log("New rating received in Add component:", newRating);
    return newRating;
  }
  
  loadFilmData(id: number) {
    const film = this.filmService.getFilmById(id);
    if (film) {
      this.myForm.patchValue({
        title: film.title,
        description: film.description,
        genere: film.genere,
        date: new Date(film.date),
        image: film.image,
        rating: film.rating
      });
      this.formRating.set(film.rating);
    }else{
      alert("Film not found!");
      this.router.navigate(['/']);
  }
  }
}
