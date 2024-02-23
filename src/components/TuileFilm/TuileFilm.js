import './TuileFilm.css';
// import { Link } from 'react-router-dom';
// par default o tuille filme tem a imagem e o titulo , caso a pessoa filtre a realisation, tem que aparecer ou ano, tem que aparece
// ternary operator na condicao de affichage

function TuileFilm(props) {
  return (
    <article>
      <img src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <h2>{props.data.titre}</h2>
      {/* <p>{props.data.realisation}</p>
      <p>{props.data.annee}</p> */}
    </article>
  );
}

export default TuileFilm;
