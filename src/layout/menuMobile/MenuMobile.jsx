import NavLink from '../../components/NavLink';
import './menuMobile.css';

export default function MenuMobile ({ clasMenu, cerrarMenu, clasLinks }) {
  return (
    <section className={clasMenu}>
      <h1>¿A donde deseas ir?</h1>
      <nav>
        <ul className='containerLinks'>
          <li><NavLink to='/' clase={clasLinks} onClick={cerrarMenu}>ARTICULOS</NavLink> </li>
          <li><NavLink to='/eventos' clase={clasLinks} onClick={cerrarMenu}>EVENTOS</NavLink></li>
          <li><NavLink to='/proyectos' clase={clasLinks} onClick={cerrarMenu}>PROYECTOS</NavLink></li>
          <li><NavLink to='/actividades' clase={clasLinks} onClick={cerrarMenu}>ACTIVIDADES</NavLink></li>
          <li><NavLink to='/colaborar' clase={clasLinks} onClick={cerrarMenu}><span className='material-symbols-outlined'>person_add</span></NavLink></li>
        </ul>
      </nav>
    </section>
  );
}
