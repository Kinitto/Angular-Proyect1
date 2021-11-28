import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from './services/hero-service.service';
import { HeroComponent } from './components/hero/hero.component';
import { SuperHeroComponent } from './super-hero.component';
import { AddheroComponent } from './components/addhero/addhero.component';
import { VillainComponent } from './components/villain/villain.component';
import { VillainService } from './services/villain-service.service';
import { AddvillainComponent } from './components/addvillain/addvillain.component';



@NgModule({
  declarations: [
    HeroComponent,
    SuperHeroComponent,
    AddheroComponent,
    VillainComponent,
    AddvillainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SuperHeroComponent
  ],
  providers: [
    HeroService,
    VillainService
  ]
})
export class SuperHeroModule { }
