import './colaborar.css';

export default function Colaborar () {
  return (
    <section className='cr-colaborar'>
      <h1 className='cr-title'>¡SUMATE AL PROYECTO!</h1>
      <div className='cr-div'>
        <b>Si tienes experiencia manejando los siguientes tecnologias:</b>
        <ul className='cr-ul'>
          <li>-HTML</li>
          <li>-CSS</li>
          <li>-JavaScript</li>
          <li>-React</li>
          <li>-MySQL (opcional)</li>
        </ul>
        <br />
        <p>Puedes colaborar en el desarrollo de la pagina ahora como en el mantenimiento a futuro.</p>
        <p>Si quieres consultar el codigo de la pagina e implementar alguna mejora puede hacer <a href='https://github.com/JoseR2007/El-Futuro-del-Jacinto/tree/master'>Click aqui</a> y hacer una pull request</p>
      </div>
    </section>
  );
}
