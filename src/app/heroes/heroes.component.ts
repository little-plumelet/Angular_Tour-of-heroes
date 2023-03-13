import { Component } from '@angular/core';
import { IHero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: IHero[] = HEROES;
  selectedHero?: IHero;
  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
