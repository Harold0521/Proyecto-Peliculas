package com.example.test_java_maven.controller;

import com.example.test_java_maven.model.Pelicula;
import com.example.test_java_maven.repository.PeliculaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/peliculas")
public class PeliculaController {

    private final PeliculaRepository peliculaRepository;

    public PeliculaController(PeliculaRepository peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
    }

    @GetMapping
    public List<Pelicula> obtenerPeliculas() {
        return peliculaRepository.findAll();
    }


}
