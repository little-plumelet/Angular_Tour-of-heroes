import { Injectable } from '@angular/core';
import { IHero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES)
    return heroes;
  }
}
