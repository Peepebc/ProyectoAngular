import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListaPeliculasService } from 'src/app/servicios/lista-peliculas.service';
import { Comentario } from 'src/app/interfaces/comentario';
import { APIComentariosService } from 'src/app/servicios/api-comentarios.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APIUsuariosService } from 'src/app/servicios/api-usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {


  pelicula:Pelicula={nombre:"",poster:"",comments:[],descripcion:"",anio:"",id:0}
  usuario:any={}

  constructor(private mostrarpeliculas:ListaPeliculasService,private route: ActivatedRoute,private apiUsuario:APIUsuariosService
    ,private cookieService:CookieService,private apiComentarios:APIComentariosService, private router:Router){}


  ngOnInit(): void{
    if(sessionStorage.getItem("jwt")){
      this.apiUsuario.obtenerDatos().subscribe((datos:Object)=>this.usuario=datos);
    }
    else{
      this.usuario=null
    }
    this.mostrarpeliculas.mostrarPelicula(Number(this.route.snapshot.paramMap.get("id"))).subscribe(pelicula=>{this.pelicula=pelicula});
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

    this.router.navigateByUrl('RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate([`juego/${Number(this.route.snapshot.paramMap.get("id"))}`]));




  }
}
