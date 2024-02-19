import './TuileFilm.css';
import { Link } from 'react-router-dom';
// cada balise filme deve ser um link

function TuileFilm(props) {
  return (
    <article>
      <Link to={`/film/${props.data.id}`} activeClassName="active"><h2>{props.data.titre}</h2></Link>
      <p>{props.data.realisateur}</p>
      <p>{props.data.annee}</p>
    </article>
  );
}

export default TuileFilm;
