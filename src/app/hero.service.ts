import { Injectable } from '@angular/core';
import { Hero } from "./hero"
import { HEROES } from "./mock-heroes"
import { Observable, of } from 'rxjs';
import { MessageServiceService } from "./message-service.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageServiceService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number) {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
