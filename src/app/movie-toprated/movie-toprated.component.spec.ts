import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopratedComponent } from './movie-toprated.component';

describe('MovieTopratedComponent', () => {
  let component: MovieTopratedComponent;
  let fixture: ComponentFixture<MovieTopratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTopratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
