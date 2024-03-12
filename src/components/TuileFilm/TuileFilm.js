import './TuileFilm.css';

function TuileFilm(props) {

  // const url = props.filtre.urlFiltre;
  // const pointInt = url.indexOf('?');
  // const pointJointure = url.indexOf('&');
  // let tri = '';
  // if (pointInt !== -1 && pointJointure !== -1) {
  //   tri = url.substring(pointInt + 5, pointJointure);
  // }

  return (
    <article className="container-image m-small">
      <img className="image" src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <div className="info-film mt-small">
        <h2>{props.data.titre}</h2>
        {(props.tri === 'annee') ? <p className="m-xsmall">{props.data.annee}</p> : ''}
        {(props.tri === 'realisation') ? <p className="m-xsmall">{props.data.realisation}</p> : ''}
      </div>
    </article>
  );
}

export default TuileFilm;
