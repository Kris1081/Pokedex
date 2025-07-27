import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <HashRouter>
      <>
        <header>
          <h1>Pokedex</h1>
          <nav>
            <ul>
              <li><Link to="/">Carusel</Link></li>
              <li><Link to="/pokelist">Pokedex</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/pokelist" element={<Pokedex />} />
            <Route path="/pokelist/:pokemonId" element={<Pokemon />} />
          </Routes>
        </main>
        <footer>
          Pokedex
        </footer>
      </>
    </HashRouter>
  );
}

export default App;
