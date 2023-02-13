import {Usuario} from "./usuario"
export interface Comentario {
  id: number,
  usuarioBean: string,
  peliculaBean: string,
  comentario: string,
  usuarioPfp: string
}
