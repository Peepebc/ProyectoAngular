import { Comentario } from "./comentario";
import { Pelicula } from "./pelicula";

export interface Usuario {
      id: number,
      correo: string,
      pass: string,
      pfp: string,
      rol:number,
      user: string,
      comments:Comentario[],
      favoritos:Pelicula[]
}
