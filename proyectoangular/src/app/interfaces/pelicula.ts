import { Comentario } from "./comentario"

export interface Pelicula {
      nombre: string,
      poster: string,
      descripcion: string,
      comentarios:Comentario[],
      anio: string,
      id: number
}
