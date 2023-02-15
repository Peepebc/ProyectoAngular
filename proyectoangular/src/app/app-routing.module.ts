import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IsAdminGuard } from './guardianes/is-admin.guard';
import { UserGuardGuard } from './guardianes/user-guard.guard';
import { RegisterComponent } from './components/register/register.component';
import { EditarComponent } from './components/editar/editar.component';


const appRoutes:Routes=[
  {path:'juegos',component:JuegosComponent},
  {path:'juego/:id',component:JuegoComponent},
  {path:'anadirJuegos',canActivate:[IsAdminGuard],component:CrearPeliculaComponent},
  {path:'editar',canActivate:[IsAdminGuard],component:EditarComponent},
  {path:'perfil',canActivate:[UserGuardGuard],component:PerfilComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'RefrshComponent',component:JuegoComponent},
  {path:'',redirectTo:'/juegos', pathMatch:'full'},
  {path:'**',component: NotFoundComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
