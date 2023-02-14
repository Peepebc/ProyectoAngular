import { Component } from '@angular/core';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario:any={}

  constructor (private apiUsuario:APIUsuariosService){}

  ngOnInit(): void{
    this.apiUsuario.obtenerDatos().subscribe((datos:any)=>{console.log(datos);this.usuario=datos});
  }
}
