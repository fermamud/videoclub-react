import './TuileFilm.css';
// cada balise filme deve ser um link

function TuileFilm(props) {
  return (
    <article>
      <h2>{props.data.titre}</h2>
      <p>{props.data.realisateur}</p>
      <p>{props.data.annee}</p>
    </article>
  );
}

export default TuileFilm;
