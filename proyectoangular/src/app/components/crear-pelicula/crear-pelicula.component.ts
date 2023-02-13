import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {


  constructor(private anadirPelicula:ListaPeliculasService){}

onSubmit(form : NgForm){
  const nombre = form.value.nombre
  const anio = form.value.anio
  const poster = form.value.img
  const descripcion = form.value.descripcion

  let pelicula:Pelicula={nombre:nombre,poster:poster,comments:[],descripcion:descripcion,anio:anio,id:0}
  console.log(JSON.stringify(pelicula))

  this.anadirPelicula.anadirPelicula(pelicula).subscribe();console.log(pelicula);

}

}
