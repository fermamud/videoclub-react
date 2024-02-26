import { useEffect, useState } from 'react';
import TuileFilm from '../TuileFilm/TuileFilm';
import Filtre from '../Filtre/Filtre';
import { Link } from 'react-router-dom';
import './ListeFilms.css';
// olhar o exercicio do compteur pra fazer o Filtre (componente)

function ListeFilms() {
  //const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
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
    // console.log(urlFiltre);
    const filtreChoisi = {urlFiltre: urlFiltre};
    return <Link key={index} data={film} to={`/film/${film.id}`} activeclassname="active">
              <TuileFilm key={index} filtre={filtreChoisi} data={film}/>
            </Link>
  });

  function filtre(tri, orderBy) {
  //function filtre(filtre) {
  // setUrlFiltre(filtre);
  
    setUrlFiltre(`${urlListeFilms}?tri=${tri}&ordre=${orderBy}`);
    // gerar dinamicamente, nao seis funcoes, 2 opcoes : passar url em argumento ou pego o elemento do target com estrutura condicional
    // a funcao filtre vai estar no componente filtre
    // setUrlFiltre('data/realisation-asc.json');
  }

  return (
    <main>
      <Filtre handleFiltre={filtre}/>
      <div>
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
