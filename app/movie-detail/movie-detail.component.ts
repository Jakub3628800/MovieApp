import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../Movie';
import { MovieSerService } from '../movie-ser.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {
private movie: Movie;
private mov: number;
  constructor(private movieService: MovieSerService,
    private route: ActivatedRoute,
    private router: Router) {
      movieService.GetSpecificMovie(this.mov).subscribe(movie => this.movie = movie);
    }

  ngOnInit() {
    this.mov = this.route.snapshot.params['Title'];
    this.movieService.GetSpecificMovie(this.mov).subscribe(movie => this.movie = movie);
  }
  public gotoMovies(){
    //this.router.navigate(['/movie-list']);
    window.history.back();
  }
}
