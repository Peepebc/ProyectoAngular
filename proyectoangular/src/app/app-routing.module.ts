import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './components/juego/juego.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes:Routes=[
  {path:'juegos',component:JuegosComponent},
  {path:'juego',component:JuegoComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/juegos', pathMatch:'full'},
  {path:'**',component: NotFoundComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
