import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculas: any[] = [];
  peliculaSeleccionada: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/peliculas')
      .subscribe({
        next: data => this.peliculas = data,
        error: err => console.error('Error al obtener películas:', err)
      });
  }

  abrirModal(pelicula: any): void {
    this.peliculaSeleccionada = pelicula;
  }

  cerrarModal(): void {
    this.peliculaSeleccionada = null;
  }
}
