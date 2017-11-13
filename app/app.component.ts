import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  query: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.query = '';
  }

public gotosearch(){
  this.router.navigate(['/movie-search/', this.query]);
}
}

