import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JsonPipe } from '@angular/common';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',"hola":"fwa"}),
 };
@Injectable({
  providedIn: 'root'
})
export class APIUsuariosService {

  private apiurl="http://localhost:8080/usuarios";
  constructor(private http:HttpClient) { }

  autenticarUsuario(usuario:Object): Observable<Object>{
    console.log(httpOptions)
    return this.http.post(`${this.apiurl}/autentica`,usuario,httpOptions);
  }

  obtenerDatos(): Observable<Object>{
    return this.http.get(`${this.apiurl}/quieneres`,httpOptions);
  }
}
