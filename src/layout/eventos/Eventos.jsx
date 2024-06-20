import { useState } from 'react';
import './eventos.css';

export default function Eventos () {
  const [eventos, setEventos] = useState([]);

  return (
    <section className='et-section'>
      {eventos.length === 0 && <div className='notContent'> <b>Aun no hay nada para mostrar</b> </div>}

    </section>
  );
}
