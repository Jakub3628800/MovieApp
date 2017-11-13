import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../Movie';

import { MovieSerService } from '../movie-ser.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];

  constructor(private service: MovieSerService,
              private route: ActivatedRoute,
              private router: Router) {
  service.getMovies().subscribe(movies => this.movies = movies);

  }

  public onSelect(movie: Movie){
    this.router.navigate(['/movie-detail', movie.id]);
  }


  ngOnInit() {
  }
}
