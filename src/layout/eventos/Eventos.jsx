import { useEffect, useState } from 'react';
import './eventos.css';

export default function Eventos () {
  const [eventos, setEventos] = useState([]);
  const [notContent, setNotContent] = useState('notContent view');

  useEffect(() => {
    setTimeout(() => {
      if (eventos.length === 0) {
        setNotContent('notContent');
      } else {
        setNotContent('notContent view');
      }
    }, 1000);
  }, [eventos]);

  return (
    <section className='et-section'>
      <div className={notContent}>
        <h2>¡Aun no hay nada para mostrar!</h2>
      </div>

    </section>
  );
}
