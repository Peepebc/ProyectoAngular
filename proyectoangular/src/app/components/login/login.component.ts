import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginUsuario: APIUsuariosService, private router: Router, private cookiService:CookieService) { }


  onSubmit(form: NgForm): any {
    const correo = form.value.email
    const pass = form.value.pass

    let user: Object = { "correo": correo, "pass":pass}
    this.loginUsuario.autenticarUsuario(user).subscribe((results:any)=>{
      if(results.jwt!=undefined)this.cookiService.set("jwt",results.jwt)});
    localStorage.setItem("auto",this.cookiService.get("jwt"))
    this.router.navigate(['perfil'])
  }

}
