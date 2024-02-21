import './Accueil.css';
import data from './Accueil.json';

function Accueil() {

  const dataAffichage = data.map((section, index) => {
    return <p key={index}>{section}</p>;
  });

  return (
    <main>
      Accueil teste
      {/* le contenu du fichier accueil.json import (com uma boucle). Colocar ele dentro do Accueil (fichier json) */}
      {dataAffichage}
    </main>
  );
}

export default Accueil;
