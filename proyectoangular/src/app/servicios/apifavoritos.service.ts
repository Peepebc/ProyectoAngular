import { Injectable } from '@angular/core';
import { Favoritos } from '../interfaces/favoritos';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JuegoComponent } from '../components/juego/juego.component';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'}),
 };

@Injectable({
  providedIn: 'root'
})
export class APIFavoritosService {

  private apiurl="http://localhost:8080/favoritos";
  constructor(private http:HttpClient) { }

  anadirFavorito(favorito:Favoritos) : Observable<Favoritos>{
    return this.http.post<Favoritos>(`${this.apiurl}/anadir`,favorito,httpOptions);
  }

  eliminarFavorito(id:Number){
    return this.http.get<Favoritos>(`${this.apiurl}/eliminar/${id}`);
  }
}
