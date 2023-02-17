import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario:any={}

  constructor (private apiUsuario:APIUsuariosService,private cookie:CookieService,private route:Router){}

  logOut =  () =>{
    sessionStorage.removeItem("jwt")
    this.usuario=null;
    this.route.navigate(['juegos'])
  }

  ngOnInit(): void{
    this.apiUsuario.obtenerDatos().subscribe((datos:Object)=>{console.log(datos);this.usuario=datos});
  }


}
