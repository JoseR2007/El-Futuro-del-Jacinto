import { useState } from 'react';
import './actividades.css';

export default function Actividades () {
  const [actividades, setActividades] = useState([]);

  return (
    <section>
      {actividades.length === 0 && <div className='notContent'> <b>Aun no hay nada para mostrar</b> </div>}
    </section>
  );
}
