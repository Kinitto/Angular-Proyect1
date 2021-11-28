import { Component, Input, OnInit } from '@angular/core';
import { Villain } from '../../interfaces/villain';
import { VillainService } from '../../services/villain-service.service';

@Component({
  selector: 'app-addvillain',
  templateUrl: './addvillain.component.html',
  styleUrls: ['./addvillain.component.css']
})
export class AddvillainComponent implements OnInit {

  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
  }

  @Input() nuevoVillain: Villain = { nombre: '', poder: '', salud: 0 };

  public agregar() {
    this.villainService.agregarVillain(this.nuevoVillain);
    this.nuevoVillain = {
      nombre: "",
      poder: "",
      salud: 0
    }
  }
}
