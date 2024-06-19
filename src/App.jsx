import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Actividades from './layout/actividades/Actividades';
import Proyectos from './components/Proyectos';
import Articulos from './layout/articulo/Articulos';
import Eventos from './layout/eventos/Eventos';
import Colaborar from './layout/colaraborar/Colaborar';

import NavLink from './components/NavLink';
import logo from './assets/logo.png';
import './app.css';

export default function App () {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const cerrarMenu = () => {
    if (mostrarMenu) {
      setMostrarMenu(!mostrarMenu);
    }
  };

  const MenuMobile = ({ clasMenu }) => {
    return (
      <section className={clasMenu}>
        <h1>¿A donde deseas ir?</h1>
        <div>
          <NavLink to='/' clase='btns-menu-desplegable' onClick={cerrarMenu}>ARTICULOS</NavLink>
          <NavLink to='/eventos' clase='btns-menu-desplegable' onClick={cerrarMenu}>EVENTOS</NavLink>
          <NavLink to='/proyectos' clase='btns-menu-desplegable' onClick={cerrarMenu}>PROYECTOS</NavLink>
          <NavLink to='/actividades' clase='btns-menu-desplegable' onClick={cerrarMenu}>ACTIVIDADES</NavLink>
          <NavLink to='/colaborar' clase='btns-menu-desplegable' onClick={cerrarMenu}><span className='material-symbols-outlined'>person_add</span></NavLink>
        </div>
      </section>
    );
  };

  return (
    <>
      <header>
        <div className='container-img'>
          <img src={logo} className='logo' alt='logo' />
        </div>
        <h1 className='title'>El Futuro del Jacinto</h1>
        <button className='menu-desplegable' onClick={() => { setMostrarMenu(!mostrarMenu); }}>
          <span className='material-symbols-outlined'>menu</span>
        </button>
      </header>
      <MenuMobile clasMenu={mostrarMenu ? 'menu_mobile' : 'menu_mobile view'} />
      <nav className='menu-nav'>
        <ul>
          <li> <NavLink to='/' clase='btns-menu' onClick={cerrarMenu}>ARTICULOS</NavLink> </li>
          <li> <NavLink to='/eventos' clase='btns-menu' onClick={cerrarMenu}>EVENTOS</NavLink> </li>
          <li> <NavLink to='/proyectos' clase='btns-menu' onClick={cerrarMenu}>PROYECTOS</NavLink> </li>
          <li> <NavLink to='/actividades' clase='btns-menu' onClick={cerrarMenu}>ACTIVIDADES</NavLink>  </li>
          <li> <NavLink to='/colaborar' clase='btns-menu' onClick={cerrarMenu}><span className='material-symbols-outlined'>person_add</span></NavLink> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Articulos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/actividades' element={<Actividades />} />
        <Route path='/colaborar' element={<Colaborar />} />
        <Route path='*' element={<h1 style={{ textAlign: 'center' }}>404: Not Found</h1>} />
      </Routes>
    </>
  );
}
