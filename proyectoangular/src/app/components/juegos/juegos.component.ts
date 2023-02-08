import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {

  peliculas:Pelicula[]=[]

  constructor(private listarpeliculas:ListaPeliculasService){}

  ngOnInit(): void{
    this.listarpeliculas.listarPeliculas().subscribe(peliculas=>{(this.peliculas=peliculas);console.log(peliculas)});
  }

}
