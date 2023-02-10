import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {


  pelicula:Pelicula={nombre:"",imagen:"",anio:"",id:0}

  constructor(private mostrarpeliculas:ListaPeliculasService,private route: ActivatedRoute){}


  ngOnInit(): void{
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{(this.pelicula=pelicula);console.log(pelicula)});
  }
}
