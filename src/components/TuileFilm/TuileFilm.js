import './TuileFilm.css';
// import { Link } from 'react-router-dom';
// par default o tuille filme tem a imagem e o titulo , caso a pessoa filtre a realisation, tem que aparecer ou ano, tem que aparece
// ternary operator na condicao de affichage

function TuileFilm(props) {
  //console.log(props.filtre.urlFiltre);
  // console.log(pointJointure);
  const url = props.filtre.urlFiltre;
  const pointInt = url.indexOf('?');
  const pointJointure = url.indexOf('&');
  let tri = '';
  if (pointInt !== -1 && pointJointure !== -1) {
    tri = url.substring(pointInt + 5, pointJointure);
    // console.log(tri);
  }

  return (
    <article>
      <img src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <h2>{props.data.titre}</h2>
      {(tri === 'annee') ? <p>{props.data.annee}</p> : ''}
      {(tri === 'realisation') ? <p>{props.data.realisation}</p> : ''}
    </article>
  );
}

export default TuileFilm;
