import './TuileFilm.css';

function TuileFilm(props) {
  //console.log(props);
  const url = props.filtre.urlFiltre;
  const pointInt = url.indexOf('?');
  const pointJointure = url.indexOf('&');
  let tri = '';
  if (pointInt !== -1 && pointJointure !== -1) {
    tri = url.substring(pointInt + 5, pointJointure);
    // console.log(tri);
  }

  return (
    <article className="container-image">
      <img className="image" src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <div className="info-film">
        <h2>{props.data.titre}</h2>
        {(tri === 'annee') ? <p>{props.data.annee}</p> : ''}
        {(tri === 'realisation') ? <p>{props.data.realisation}</p> : ''}
      </div>
    </article>
  );
}

export default TuileFilm;
