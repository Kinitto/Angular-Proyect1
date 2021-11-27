import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';


@Injectable() export class HeroService {

  constructor() {
  }

  private _heroes: Hero[] = [
    {
      nombre: "Super Man",
      poder: "Rayos X",
      salud: 5000
    },
    {
      nombre: "Thor",
      poder: "Martillo mjölnir",
      salud: 8500
    },
    {
      nombre: "Hulk",
      poder: "Super Fuerza",
      salud: 15000
    },
    {
      nombre: "Spiderman",
      poder: "Araña",
      salud: 3000
    }
  ]

  public obtenerHeroes(): Hero[] {
    return this._heroes;
  }

  public agregarHero(heroe: Hero): void {
    this._heroes.push(heroe);
  }
}
