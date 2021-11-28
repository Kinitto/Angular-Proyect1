import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  @Input() nuevoHero: Hero = { nombre: '', poder: '', salud: 0 };

  public agregar() {
    this.heroService.agregarHero(this.nuevoHero);
    this.nuevoHero = {
      nombre: "",
      poder: "",
      salud: 0
    }
  }

}
