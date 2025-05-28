export interface Pelicula {
  id: number;
  titulo: string;
  director: string;
  anio: number;
  genero: string;
  sinopsis?: string;
  imagenUrl?: string;
}
