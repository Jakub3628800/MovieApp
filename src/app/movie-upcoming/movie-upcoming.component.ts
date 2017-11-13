import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../Movie';
import { MovieSerService } from '../movie-ser.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieUpcomingComponent implements OnInit {
  public movies: Movie[];
  constructor(private service: MovieSerService,
    private route: ActivatedRoute,
    private router: Router) {
  service.getUpcoming().subscribe(movies => this.movies = movies);
}

  ngOnInit() {
  }
  public onSelect(movie: Movie){
    this.router.navigate(['/movie-detail', movie.id]);
    }
}
