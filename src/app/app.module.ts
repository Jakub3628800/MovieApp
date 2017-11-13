import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MovieSerService} from './movie-ser.service';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieTopratedComponent } from './movie-toprated/movie-toprated.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-router/app-router.module';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePopularComponent,
    MovieTopratedComponent,
    MovieDetailComponent,
    MovieUpcomingComponent,
    AboutPageComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MovieSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
