import { Component } from '@angular/core';
import { IHero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService, private messageService: MessagesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
    this.messageService.add(`Hero named ${hero.name} with id '${hero.id}' was selected.`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }
}
