import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path:'auth',
    loadChildren: ()=> import ('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then(module => module.HeroesModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot ( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
