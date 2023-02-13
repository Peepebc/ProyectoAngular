import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';
import { Comentario } from 'src/app/interfaces/comentario';
import { APIComentariosService } from 'src/app/servicios/api-comentarios.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {


  pelicula:Pelicula={nombre:"",poster:"",comments:[],descripcion:"",anio:"",id:0}


  constructor(private mostrarpeliculas:ListaPeliculasService,private mostrarComentarios:APIComentariosService,private route: ActivatedRoute){}


  ngOnInit(): void{
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{(this.pelicula=pelicula);console.log(pelicula.comments.length)});
  }
}
