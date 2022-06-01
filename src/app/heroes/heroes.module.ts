import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from "@angular/forms";

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroeHomeComponent } from './pages/heroe-home/heroe-home.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImgPipe } from './pipes/img.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HeroeHomeComponent,
    ListHeroComponent,
    HeroCardComponent,
    ImgPipe,
    ConfirmDialogComponent
  ],
  imports: [
    HeroesRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
