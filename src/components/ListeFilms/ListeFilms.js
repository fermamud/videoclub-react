import { useEffect, useState } from 'react';
import TuileFilm from '../TuileFilm/TuileFilm';
import Filtre from '../Filtre/Filtre';
import { Link } from 'react-router-dom';
import './ListeFilms.css';

function ListeFilms() {
  // const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  // const urlListeFilms = 'data/titre-asc.json';
  const urlListeFilms = 'https://demo-en-classe.onrender.com/api/films';
  const [urlFiltre, setUrlFiltre] = useState([urlListeFilms]);

  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {
    // console.log('rendu');
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        setListeFilms(data);
      });
  }, [urlFiltre]);

  const tuilesFilm = listeFilms.map((film, index) => {
    const filtreChoisi = {urlFiltre: urlFiltre};
    return <Link key={index} data={film} to={`/film/${film.id}`}>
              <TuileFilm key={index} filtre={filtreChoisi} data={film}/>
            </Link>
  });

  // meu trabalho pessoal
  function filtre(tri, orderBy) {
      setUrlFiltre(`${urlListeFilms}?tri=${tri}&ordre=${orderBy}`);
  }

  // aula
  
  // function filtre(filtre) {
  // setUrlFiltre(filtre);
  // }

  return (
    <main>
      <div className="filtre">
        <Filtre handleFiltre={filtre}/>
      </div>
      <div className="container-imgs">
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
