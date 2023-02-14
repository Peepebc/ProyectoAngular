import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  usuario:any={}

  constructor (private apiUsuario:APIUsuariosService,private cookieService:CookieService){}

  ngOnInit(): void{
    if(this.cookieService.check("jwt")){
    this.apiUsuario.obtenerDatos().subscribe((datos:Object)=>this.usuario=datos);
  }
  else{
    this.usuario=null
  }
  }
}
