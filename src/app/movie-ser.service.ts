import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Movie} from './Movie';


@Injectable()
export class MovieSerService {

  private request$: Observable<Movie[]>;
  private popular$: Observable<Movie[]>;
  private toprated$: Observable<Movie[]>;
  private upcoming$: Observable<Movie[]>;

  constructor(private http: Http) {
  // in cinemas
  this.request$ = http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a636f51afcd017926c6b22c454707056`)
  .map(response => response.json().results);

  // popular
  this.popular$ = http.get(`https://api.themoviedb.org/3/movie/popular?api_key=a636f51afcd017926c6b22c454707056`)
  .map(response => response.json().results);

  // toprated
  this.toprated$ = http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a636f51afcd017926c6b22c454707056`)
  .map(response => response.json().results);

  // upcoming
  this.upcoming$ = http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a636f51afcd017926c6b22c454707056`)
  .map(response => response.json().results);
}
// get movies in cinemas
  public getMovies(): Observable<Movie[]> {
    return this.request$;
  }
  public getPopular(): Observable<Movie[]> {
    return this.popular$;
  }
  public getToprated(): Observable<Movie[]> {
    return this.toprated$;
  }
  public getUpcoming(): Observable<Movie[]> {
    return this.upcoming$;
  }


  
  public GetSpecificMovie( id: number): Observable<Movie> {
    let a = 'https://api.themoviedb.org/3/movie/';
    let key = '?api_key=a636f51afcd017926c6b22c454707056';
    let b = String(id);
    let url = a + b + key ;
    let movie = this.http.get(url).map(response => response.json());
    return movie;
  }
  public SearchForMovie (search : string): Observable<Movie[]> {
    let a = 'https://api.themoviedb.org/3/search/movie?api_key=a636f51afcd017926c6b22c454707056&query=';
    let url = a + search;
    let movies = this.http.get(url).map(response => response.json().results);
    return movies;
  }

}
