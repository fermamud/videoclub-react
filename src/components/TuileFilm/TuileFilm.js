import './TuileFilm.css';

function TuileFilm(props) {

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
