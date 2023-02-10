import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPeliculasService {

  private apiurl="http://localhost:8080/peliculas";
  constructor(private http:HttpClient) { }

  listarPeliculas(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.apiurl);
  }

  mostrarPelicula(id:number): Observable<Pelicula>{
    return this.http.get<Pelicula>(`${this.apiurl}/${id}`);
  }


}
