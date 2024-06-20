import './articulo.css';
import { useState } from 'react';

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

  return (
    <section>
      {articulos.length === 0 && <div className='notContent'> <b>Aun no hay nada para mostrar</b> </div>}

      <section className='at-allArticle' />
    </section>
  );
}
