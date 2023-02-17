import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JsonPipe } from '@angular/common';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };
@Injectable({
  providedIn: 'root'
})
export class ListaPeliculasService {

  private apiurl="http://localhost:8080/peliculas";
  constructor(private http:HttpClient) { }

  listarPeliculas(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${this.apiurl}/obtener`);
  }

  mostrarPelicula(id:number): Observable<Pelicula>{
    return this.http.get<Pelicula>(`${this.apiurl}/obtenerUna?id=${id}`);
  }

  anadirPelicula(pelicula:Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(`${this.apiurl}/anadir`,pelicula,httpOptions);
  }

  eliminarPelicula(id:number){
    return this.http.get<Pelicula>(`${this.apiurl}/delete/${id}`);
  }

  editarPelicula(pelicula:Pelicula){
    return this.http.put<Pelicula>(`${this.apiurl}/editar`,pelicula,httpOptions);
  }


}
