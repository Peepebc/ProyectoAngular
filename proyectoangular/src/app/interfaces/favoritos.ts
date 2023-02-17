import { Pelicula } from "./pelicula"
import {Usuario} from "./usuario"

export interface Favoritos {
  id:number,
  pelicula:Pelicula,
  usuario:Usuario
}
