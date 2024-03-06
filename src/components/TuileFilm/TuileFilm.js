import './TuileFilm.css';
// import { Link } from 'react-router-dom';
// par default o tuille filme tem a imagem e o titulo , caso a pessoa filtre a realisation, tem que aparecer ou ano, tem que aparece
// ternary operator na condicao de affichage

function TuileFilm(props) {
  // console.log(props.filtre.urlFiltre);
  // console.log(pointJointure);

  // meu trabalho final tem isso

  // const url = props.filtre.urlFiltre;
  // const pointInt = url.indexOf('?');
  // const pointJointure = url.indexOf('&');
  // let tri = '';
  // if (pointInt !== -1 && pointJointure !== -1) {
  //   tri = url.substring(pointInt + 5, pointJointure);
  //   console.log(tri);
  // }

  return (
    <article className="container-image">
      <img className="image" src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <div className="info-film">
        <h2>{props.data.titre}</h2>

        {/* meu trabalho final tem isso */}
        {/* {(tri === 'annee') ? <p>{props.data.annee}</p> : ''}
        {(tri === 'realisation') ? <p>{props.data.realisation}</p> : ''} */}
      </div>
    </article>
  );
}

export default TuileFilm;
