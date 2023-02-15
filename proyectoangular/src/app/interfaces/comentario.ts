import { Pelicula } from "./pelicula"
import {Usuario} from "./usuario"
export interface Comentario {
  id: number,
  comentario: string,
  usuarioBean: Usuario,
  peliculaBean: Pelicula,
  usuarioPfp:string
}
