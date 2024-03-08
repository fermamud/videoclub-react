import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TuileFilm from '../TuileFilm/TuileFilm';
import Filtre from '../Filtre/Filtre';
import './ListeFilms.css';

function ListeFilms() {
  // const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  // const urlListeFilms = 'data/titre-asc.json';
  const urlListeFilms = 'https://demo-en-classe.onrender.com/api/films';
  const [urlFiltre, setUrlFiltre] = useState([urlListeFilms]);

  const [listeFilms, setListeFilms] = useState([]);

  const [estCharge, setEstCharge] = useState(false);

  useEffect(() => {
    // console.log('rendu');
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        setListeFilms(data);
        setEstCharge(true);
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
 
  const transition = { duration: 0.5, ease: 'easeInOut' };
  const variant = {
    hidden: {opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition },
    exit: { opacity: 1, y: 25, transition }
  }

  return (
    <main>
      {/* <div > */}
        <motion.div
          key='filtre'
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0, transition }}
          exit={{ opacity: 1, x: -25, transition }}
          className="filtre"
        >
          <Filtre handleFiltre={filtre}/>
        </motion.div>
      {/* </div> */}
      {/* <div > */}
      {estCharge ? (
        <motion.div
          key='liste-film'
          initial= 'hidden'
          animate='visible'
          exit='exit'
          variants={variant}
          className="container-imgs"
        >
          {tuilesFilm}
        </motion.div>
        ) : ( '' )}
        {/* </div> */}
    </main>
  );
}

export default ListeFilms;
