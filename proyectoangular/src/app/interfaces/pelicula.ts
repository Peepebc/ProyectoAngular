import { Comentario } from "./comentario"

export interface Pelicula {
      nombre: string,
      poster: string,
      descripcion: string,
      comments:Comentario[],
      anio: string,
      id: number
}
