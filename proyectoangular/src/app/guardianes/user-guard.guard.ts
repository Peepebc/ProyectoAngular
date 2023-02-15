import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { APIUsuariosService } from '../servicios/api-usuarios.service';


@Injectable({
  providedIn: 'root'
})

export class UserGuardGuard implements CanActivate {

  constructor (private router:Router,private cookie:CookieService,private APIusuario:APIUsuariosService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(!sessionStorage.getItem('jwt')){
      this.router.navigate(['login'])
    }
    return true;
  }

}
