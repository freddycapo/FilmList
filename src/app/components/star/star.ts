import { Component , input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.css'
})
export class Star {
  public checked = input<boolean>(false);
  
  public id = input.required<number>();
  public clicked = output<number>();

} 
