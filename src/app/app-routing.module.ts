import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


const routes:Routes = [
  {
    path:'auth',
    loadChildren: ()=> import ('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then(module => module.HeroesModule),
    canLoad:[AuthGuard],
    canActivate: [ AuthGuard ]

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
