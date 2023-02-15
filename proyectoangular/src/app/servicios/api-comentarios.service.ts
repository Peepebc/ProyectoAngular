import { Injectable } from '@angular/core';
import { Comentario } from '../interfaces/comentario';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JuegoComponent } from '../components/juego/juego.component';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'}),
 };

@Injectable({
  providedIn: 'root'
})
export class APIComentariosService {

  private apiurl="http://localhost:8080/comentarios";
  constructor(private http:HttpClient) { }

  listarComentarios(idPelicula:number): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.apiurl}?pelicula=${idPelicula}`);
  }

  comentar(comentario:Comentario): Observable<JuegoComponent>{
    return this.http.post<JuegoComponent>(`${this.apiurl}/comentar`,comentario,httpOptions);
  }
}
