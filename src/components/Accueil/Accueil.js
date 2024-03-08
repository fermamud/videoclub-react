import { motion } from 'framer-motion'; 
import './Accueil.css';
import data from './Accueil.json';

function Accueil() {

  const dataAffichage = data.map((section, index) => {
    return <p key={index}>{section}</p>;
  });

  const transition = { duration: 0.5, ease: 'easeInOut' };
  const variant = {
    hidden: {opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition },
    exit: { opacity: 1, y: 25, transition }
  }

  return (
    <motion.main
      key='accueil'
      initial= 'hidden'
      animate='visible'
      exit='exit'
      variants={variant}
    >
      Accueil teste
      {/* le contenu du fichier accueil.json import (com uma boucle). Colocar ele dentro do Accueil (fichier json) */}
      {dataAffichage}
    </motion.main>
  );
}

export default Accueil;