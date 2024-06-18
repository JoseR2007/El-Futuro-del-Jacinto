import './articulo.css';
import { useEffect, useState } from 'react';

const Articulo = ({ children, title, user, fecha }) => {
  return (
    <article className='at-article'>
      <h1 className='at-title'>{title}</h1>
      <hr />
      <div className='at-content'>
        <p className='at-p'>{children}</p>
      </div>
      <br />
      <p><b>De parte de:</b> {user}</p>
    </article>
  );
};

export default function Articulos () {
  const [articulos, setArticulos] = useState([]);
  const [classUps, setClassUps] = useState('ups view');

  useEffect(() => {
    setTimeout(() => {
      if (articulos.length === 0) {
        setClassUps('ups');
      } else {
        setClassUps('ups view');
      }
    }, 1000);
  }, [articulos]);

  return (
    <section>
      <div className={classUps}>
        <h2>¡Aun no hay nada para mostrar!</h2>
      </div>

      <section className='at-allArticle' />
    </section>
  );
}
