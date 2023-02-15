import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../../interfaces/usuario';
import { APIUsuariosService } from '../../servicios/api-usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private loginUsuario: APIUsuariosService, private router: Router, private cookiService:CookieService) { }


  ngOnInit(){
    if(this.cookiService.check("jwt")){
      this.router.navigate(['perfil'])
    }
  }


  onSubmit(form: NgForm): any {
    const correo = form.value.email
    const pass = form.value.pass
    const pfp = form.value.pfp
    const user = form.value.user


    let usuario: Usuario = {
      "id": 0,
      "correo": correo,
      "pass": pass,
      "pfp": pfp,
      "rol": 0,
      "user": user,
      "comments": []
    }
    this.loginUsuario.registerUsuario(usuario).subscribe((results:any)=>{
      this.loginUsuario.autenticarUsuario({"correo":correo,"pass":pass}).subscribe((results:any)=>{
        if(results.jwt!=undefined){
          this.cookiService.set("jwt",results.jwt)
          this.router.navigate(['perfil'])
    }});


    });

  }

}
