import './App.css';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Detalle from './pages/Detalle';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import DetalleItem from './pages/detalle-item';

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to={'/'} className={(nav) => nav.isActive ? 'link-activo' : ''}>Home</NavLink></li>
        <li><NavLink to={'/catalogo'} className={(nav) => nav.isActive ? 'link-activo' : ''}>Catalogo</NavLink></li>
        <li><NavLink to={'/detalle'} className={(nav) => nav.isActive ? 'link-activo' : ''}>Detalle</NavLink></li>
        <li><NavLink to={'/detalle/superman'} className={(nav) => nav.isActive ? 'link-activo' : ''}>Detalle de superman</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogo/*' element={<Catalogo/>} />
        <Route path='/detalle' element={<Detalle/>} />
        <Route path='/detalle/:id' element={<DetalleItem/>} />
      </Routes>
    </div>
  );
}

export default App;
