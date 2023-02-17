import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';
import { Comentario } from 'src/app/interfaces/comentario';
import { APIComentariosService } from 'src/app/servicios/api-comentarios.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { APIFavoritosService } from 'src/app/servicios/apifavoritos.service';
import { Favoritos } from 'src/app/interfaces/favoritos';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {

  pelicula:Pelicula={
    nombre: "",
    imagen: "", comments: [], descripcion: "", anio: "", id: 0,
    favoritos: []
  }
  usuario:Usuario={
    id: 0,
    correo: '',
    pass: '',
    pfp: '',
    rol: 0,
    user: '',
    comments: [],
    favoritos: []
  }
  isFavorite=false
  favId:number=0

  constructor(private mostrarpeliculas:ListaPeliculasService,private route: ActivatedRoute,private apiUsuario:APIUsuariosService
    ,private cookieService:CookieService,private apiComentarios:APIComentariosService, private router:Router,
    private APIfavoritos:APIFavoritosService){}


  ngOnInit(): void{
    if(sessionStorage.getItem("jwt")){
      this.apiUsuario.obtenerDatos().subscribe(async (datos:any)=>{this.usuario= await datos});
    }
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{
      this.pelicula= pelicula;
     if(this.usuario.favoritos.filter((peli:any)=>peli.idPelicula==pelicula.id).length>0){
      this.favId=this.usuario.favoritos.filter((peli:any)=>peli.idPelicula==pelicula.id)[0].id;
      this.isFavorite=true;
     }
    });

  }

  onSubmit(form:NgForm):any{
    if(form.value.comentario=="") return false
    const coment= form.value.comentario;

    let comentario:Comentario={
      id: 0,
      comentario: coment,
      usuarioBean: this.usuario,
      peliculaBean: this.pelicula,
      usuarioPfp: ''
    }

    this.apiComentarios.comentar(comentario).subscribe();
    location.href=`/juego/${Number(this.route.snapshot.paramMap.get("id"))}`
    }

  anadirFav =  () => {
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{
      this.pelicula= pelicula;
    });
    let favorito:Favoritos={
      id:0,
      usuario: this.usuario,
      pelicula: this.pelicula
    }
    console.log(favorito);
    this.APIfavoritos.anadirFavorito(favorito).subscribe();
    location.href=`/juego/${Number(this.route.snapshot.paramMap.get("id"))}`

  }

  eliminarFav = (id:number) => {
    this.APIfavoritos.eliminarFavorito(id).subscribe()
    location.href=`/juego/${Number(this.route.snapshot.paramMap.get("id"))}`
  }
}
