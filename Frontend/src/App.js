import react from 'react';
import PeliculasList from "./components/PeliculasList";
// import './App.css'; 
import './App.scss';

function App() {
  return (
    <div className="fondo-peliculas">
      <div className="App">
        <h1 className="text-center text-white">Películas en Cartelera</h1>
        <PeliculasList />
      </div>
    </div>
  );
}

export default App;