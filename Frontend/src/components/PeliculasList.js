import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PeliculasList = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const abrirModal = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const cerrarModal = () => {
    setPeliculaSeleccionada(null);
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/peliculas')
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.error('Error al obtener películas:', error));
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4 text-center text-white">Listado de Películas</h2>
        <div className="row">
          {peliculas.map(pelicula => (
            <div className="col-md-4 mb-4" key={pelicula.id}>
              <div className="card h-100" onClick={() => abrirModal(pelicula)} style={{ cursor: 'pointer' }}>
                <img 
                  src={pelicula.imagenUrl || "https://www.districtwon.com/wp-content/uploads/sites/12/2024/03/image-placeholder-500x500-1-2.jpg"}
                  className='card-img-top'
                  alt={`Imagen de ${pelicula.titulo}`} 
                />
                <div className="card-body">
                  <h5 className="card-title">{pelicula.titulo}</h5>
                  <p className="card-text">
                    <strong>Director:</strong> {pelicula.director}<br />
                    <strong>Año:</strong> {pelicula.anio}<br />
                    <strong>Género:</strong> {pelicula.genero}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {peliculaSeleccionada && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={cerrarModal}>
            <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{peliculaSeleccionada.titulo}</h5>
                  <button type="button" className="btn-close" onClick={cerrarModal}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Director:</strong> {peliculaSeleccionada.director}</p>
                  <p><strong>Año:</strong> {peliculaSeleccionada.anio}</p>
                  <p><strong>Género:</strong> {peliculaSeleccionada.genero}</p>
                  <p><strong>Sinopsis:</strong> {peliculaSeleccionada.sinopsis || 'Sin sinopsis disponible.'}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={cerrarModal}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container">
          <p className="mb-0">Hecho Por Harold Gamba</p>
        </div>
      </footer>
    </>
  );
};

export default PeliculasList;