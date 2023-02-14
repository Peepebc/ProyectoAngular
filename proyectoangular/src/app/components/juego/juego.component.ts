import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';
import { Comentario } from 'src/app/interfaces/comentario';
import { APIComentariosService } from 'src/app/servicios/api-comentarios.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {


  pelicula:Pelicula={nombre:"",poster:"",comments:[],descripcion:"",anio:"",id:0}
  usuario:any={}

  constructor(private mostrarpeliculas:ListaPeliculasService,private route: ActivatedRoute,private apiUsuario:APIUsuariosService,private cookieService:CookieService){}


  ngOnInit(): void{
    if(this.cookieService.check("jwt")){
      this.apiUsuario.obtenerDatos().subscribe((datos:Object)=>this.usuario=datos);
    }
    else{
      this.usuario=null
    }
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{(this.pelicula=pelicula);console.log(pelicula.comments.length)});
  }
}
