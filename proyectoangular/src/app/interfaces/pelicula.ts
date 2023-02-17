import { Comentario } from "./comentario"
import { Favoritos } from "./favoritos"

export interface Pelicula {
      nombre: string,
      imagen: string,
      descripcion: string,
      comments:Comentario[],
      favoritos:Favoritos[],
      anio: string,
      id: number
}
