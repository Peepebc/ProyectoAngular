import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  peliculas:Pelicula[]=[]

  constructor(private listarpeliculas:ListaPeliculasService,private router:Router){}

  ngOnInit(): void{
    this.listarpeliculas.listarPeliculas().subscribe(peliculas=>{(this.peliculas=peliculas);console.log(peliculas)});
  }

  eliminar =(id:number)=>{
    if(confirm("Esta seguro de que quiere eliminar la pelicula?")){
      this.listarpeliculas.eliminarPelicula(id).subscribe();
      this.router.navigate([`/juegos`]);
    }

  }

}
