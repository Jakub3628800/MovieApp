import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../Movie';
import { MovieSerService } from '../movie-ser.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieSearchComponent implements OnInit {
  public movies: Movie[];
  public quer: string;
  constructor(private service: MovieSerService,
    private route: ActivatedRoute,
    private router: Router) {
      this.quer = this.route.snapshot.params['query'];
      this.service.SearchForMovie(this.quer).subscribe(movies => this.movies = movies);
}

  ngOnInit() {
  this.call();
  this.router.events.subscribe(path => {
    // this is because of the bug of no reload
    console.log('path = ', path);
    this.call();
  });
}
  public call() {
    this.quer = this.route.snapshot.params['query'];
    this.service.SearchForMovie(this.quer).subscribe(movies => this.movies = movies);
  }
  public onSelect(movie: Movie){
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
