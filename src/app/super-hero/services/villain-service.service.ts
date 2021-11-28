import { Injectable } from '@angular/core';
import { Villain } from '../interfaces/villain';


@Injectable () export class VillainService {

  constructor() { }


  private _Villains: Villain[] = [
    {
      nombre: "Thanos",
      poder: "Gemas del Infinito",
      salud: 5000
    },
    {
      nombre: "Ragnarok",
      poder: "Espada de fuego",
      salud: 28000
    }
  ]

  public obtenerVillains(): Villain[] {
    return this._Villains;
  }

  public agregarVillain(villain: Villain): void {
    this._Villains.push(villain);
  }
}
