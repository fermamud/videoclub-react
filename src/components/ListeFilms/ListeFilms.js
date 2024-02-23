import { useEffect, useState } from 'react';
import TuileFilm from '../TuileFilm/TuileFilm';
import { Link } from 'react-router-dom';
import './ListeFilms.css';

function ListeFilms() {

  // <Link a variavel pode ser o proprio componente to= route vers o filme />
  // ele vai nos enviar a documentacao base
  // return <TuileFilm key={index} data={film}/>

  // teste
  // const [etat, setEtat] = useState(true);
  // const [etatTest, setEtatTest] = useState(false);

  //const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  const urlListeFilms = 'https://demo-en-classe.onrender.com/api/films';
  const [listeFilms, setListeFilms] = useState([]);

  // const listeFilms = [
  //   { id: 1,titre: 'Film 1', realisateur: 'Billy', annee: '2010' },
  //   { id: 2,titre: 'Film 2', realisateur: 'Billy', annee: '2011' },
  //   { id: 3,titre: 'Film 3', realisateur: 'Billy', annee: '2012' }
  // ];

  // console.log('rendu');
  // teste
  // useEffect(() => {

  //   console.log('rendu');
  
  // }, [etat, etatTest]);
  // fim teste

  useEffect(() => {

    console.log('rendu');

    fetch(urlListeFilms)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListeFilms(data);
      });
    
  
  }, []);

  const tuilesFilm = listeFilms.map((film, index) => {
    // o link do filme deve ser aqui. nao no tuille
    // return <Link key={index} data={film} to={`/film/${film.id}`} activeclassname="active">

    return <Link key={index} data={film} to={`/film/${film.id}`} activeclassname="active">
              <TuileFilm key={index} data={film} />
            </Link>
    
    //return <TuileFilm key={index} data={film} />
  });

  return (
    <main>

      {/* <button onClick={() => setEtat(!etat)}>Change etat</button>
      <p>{JSON.stringify(etat)}</p>
      <button onClick={() => setEtatTest(!etatTest)}>Change etat</button>
      <p>{JSON.stringify(etatTest)}</p> */}

      <h2>Liste des Films</h2>
      <div>
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
