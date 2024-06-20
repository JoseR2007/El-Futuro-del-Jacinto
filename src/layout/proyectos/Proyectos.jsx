import { useState } from 'react';
import './proyectos.css';

export default function Proyectos () {
  const [proyectos, setProyectos] = useState([]);

  return (
    <section>
      {proyectos.length === 0 && <div className='notContent'> <b>Aun no hay nada para mostrar</b> </div>}

      <div className='containerProjects' />
    </section>
  );
}
