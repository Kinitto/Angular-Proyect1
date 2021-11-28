import { Component, OnInit } from '@angular/core';
import { Villain } from '../../interfaces/villain';
import { VillainService } from '../../services/villain-service.service';


@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  public villains: Villain[];

  constructor(private villainService: VillainService) {
    this.villains = [];
  }

  ngOnInit(): void {
    this.obtenerVillains();
  }

  private obtenerVillains(): void {
    this.villains = this.villainService.obtenerVillains();
  }

  private agregarVillain(villain: Villain): void {
    this.villainService.agregarVillain(villain);
  }

}
