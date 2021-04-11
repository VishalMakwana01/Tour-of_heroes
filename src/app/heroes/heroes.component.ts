import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../mock-heroes"
import { HeroService } from "../hero.service"
import { MessageServiceService } from "../message-service.service"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageServiceService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
