import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TuileFilm from '../TuileFilm/TuileFilm';
import Filtre from '../Filtre/Filtre';
import './ListeFilms.css';

function ListeFilms() {
  const urlListeFilms = 'https://demo-en-classe.onrender.com/api/films';
  const [urlFiltre, setUrlFiltre] = useState([urlListeFilms]);

  const [tri, setTri] = useState('');
  
  const [listeFilms, setListeFilms] = useState([]);

  const [estCharge, setEstCharge] = useState(false);

  useEffect(() => {
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
              <TuileFilm key={index} tri={tri} filtre={filtreChoisi} data={film}/>
            </Link>
  });

  function filtre(tri, orderBy) {
      setUrlFiltre(`${urlListeFilms}?tri=${tri}&ordre=${orderBy}`);
  }

  function triActif(tri) {
    setTri(tri);
  }
 
  const transition = { duration: 1, ease: 'easeInOut' };
  const variant = {
    hidden: {opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition },
    exit: { opacity: 1, y: -25, transition }
  }

  return (
    <main>
        <motion.div
            key='filtre'
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0, transition }}
            exit={{ opacity: 1, x: -25, transition }}
            className="filtre"
        >
            <Filtre handleTri={triActif} handleFiltre={filtre}/>
        </motion.div>
        {estCharge ? 
            <motion.div
              // key='liste-film'
              key={urlFiltre}
              initial= 'hidden'
              animate='visible'
              exit='exit'
              variants={variant}
              className="container-imgs"
            >
              {tuilesFilm}
            </motion.div>
            : ( '' )
        }
    </main>
  );
}

export default ListeFilms;
