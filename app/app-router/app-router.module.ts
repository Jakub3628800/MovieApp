import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MoviePopularComponent } from '../movie-popular/movie-popular.component';
import { MovieTopratedComponent} from '../movie-toprated/movie-toprated.component';
import { MovieUpcomingComponent} from '../movie-upcoming/movie-upcoming.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

const appRoutes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail/:Title', component: MovieDetailComponent },
  { path: 'movie-search/:query', component: MovieSearchComponent },
  { path: 'movie-popular', component: MoviePopularComponent },  
  { path: 'movie-toprated', component: MovieTopratedComponent }, 
  { path: 'movie-upcoming', component: MovieUpcomingComponent},
  { path: 'about', component: AboutPageComponent},
  { path: '',   redirectTo: '/movie-list', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
