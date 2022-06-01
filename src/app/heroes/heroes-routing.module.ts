import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroeHomeComponent } from './pages/heroe-home/heroe-home.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { SearchComponent } from './pages/search/search.component';

const routes:Routes = [
  {
    path:'',
    component:HeroeHomeComponent,
    children:[
      {
        path:'listHero',
        component:ListHeroComponent
      },
      {
        path:'addHero',
        component:AddComponent
      },
      {
        path:'editHero/:id',
        component:AddComponent
      },
      {
        path:'searchHero',
        component:SearchComponent
      },
      {
        path:':id',
        component:HeroComponent
      },
      {
        path:'**',
        redirectTo:'listHero'
      },
    ]
  }


]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
