import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

export class Movie{

  public id : number;
  public title : string;

  public constructor(id :number, title : string){
    this.id = id;
    this.title = title;
  }

}

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})

export class MoviesPageComponent {

  public movies = [
    new Movie(1, "Shrek"),
    new Movie(2, "Sharknado"),
    new Movie(3, "Megalodon vs Octopus")
  ]
  public constructor(private http : HttpClient){}

  public callAPI(){
    //TODO : Appeler le WS des films
    this.http.get<Movie[]>("http://127.0.0.1:8080/api/v1/movies").subscribe(
      data => {
        this.movies = data;
      }
    );

  }

}
