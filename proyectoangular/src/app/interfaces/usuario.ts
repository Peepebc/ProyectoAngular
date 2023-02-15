import { Comentario } from "./comentario";

export interface Usuario {
      id: number,
      correo: string,
      pass: string,
      pfp: string,
      rol:number,
      user: string,
      comments:Comentario[]
}
