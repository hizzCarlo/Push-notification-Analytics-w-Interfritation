import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  displayName: string= "hizola";
  displayText: string= "";
  newMovie: string = "";
  movies:string[] = [
    "avenger",
    "aquaman",
    "fuckboy"
  ]
  addMovie(){
    this.movies.push(this.newMovie);
  }
  removeMovie(){
    this.movies.pop()
  }
  setDisplayName(){
    this.displayName = Math.random().toString();
  }

}
