import { Injectable } from '@angular/core';
import { IHero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): IHero[] {
    return HEROES;
  }
}
