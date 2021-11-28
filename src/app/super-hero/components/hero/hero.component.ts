import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  private obtenerHeroes(): void {
    this.heroes = this.heroService.obtenerHeroes();
  }

  private agregarHero(hero: Hero): void {
    this.heroService.agregarHero(hero);
  }
}
