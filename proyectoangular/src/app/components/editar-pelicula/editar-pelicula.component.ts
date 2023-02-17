
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { Comentario } from 'src/app/interfaces/comentario';
import { APIComentariosService } from 'src/app/servicios/api-comentarios.service';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';


@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  constructor(private anadirPelicula:ListaPeliculasService, private router:Router , private route:ActivatedRoute){}
  pelicula:Pelicula={
    nombre: '',
    imagen: '',
    descripcion: '',
    comments: [],
    anio: '',
    id: 0,
    favoritos: []
  }
  ngOnInit(){
    this.anadirPelicula.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{this.pelicula=pelicula});

  }

onSubmit(form : NgForm){
  const nombre = form.value.nombre || this.pelicula.nombre
  const anio = form.value.anio || this.pelicula.anio
  const poster = form.value.img || this.pelicula.imagen
  const descripcion = form.value.descripcion || this.pelicula.descripcion

  let peliculaEditada:Pelicula={
    nombre: nombre, imagen: poster, comments: [], descripcion: descripcion, anio: anio, id: this.pelicula.id,
    favoritos: []
  }
  console.log(JSON.stringify(peliculaEditada))

  this.anadirPelicula.editarPelicula(peliculaEditada).subscribe();console.log(peliculaEditada);
  this.router.navigate(['editar'])

}
}
