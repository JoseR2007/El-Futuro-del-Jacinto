import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Actividades from './layout/actividades/Actividades';
import Proyectos from './layout/proyectos/Proyectos';
import Articulos from './layout/articulo/Articulos';
import Eventos from './layout/eventos/Eventos';
import Colaborar from './layout/colaborar/Colaborar';
import MenuMobile from './layout/menuMobile/MenuMobile';

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
      {mostrarMenu && <MenuMobile clasMenu='menu_mobile' cerrarMenu={cerrarMenu} clasLinks='btns-menu-desplegable' />}
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
