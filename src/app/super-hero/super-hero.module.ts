import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from './services/hero-service.service';
import { HeroComponent } from './components/hero/hero.component';
import { SuperHeroComponent } from './super-hero.component';



@NgModule({
  declarations: [
    HeroComponent,
    SuperHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SuperHeroComponent
  ],
  providers: [
    HeroService
  ]
})
export class SuperHeroModule { }
