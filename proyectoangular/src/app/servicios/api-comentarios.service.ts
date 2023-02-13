import { Injectable } from '@angular/core';
import { Comentario } from '../interfaces/comentario';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIComentariosService {

  private apiurl="http://localhost:8080/comentarios";
  constructor(private http:HttpClient) { }

  listarComentarios(idPelicula:number): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.apiurl}?pelicula=${idPelicula}`);
  }
}
