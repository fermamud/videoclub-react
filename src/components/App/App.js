// À faire suite au cours 8
// - Contenu statique Accueil (import json et non copier-coller dans Accueil.js) -> confirmar nas aulas se ele tambem faz assim
// - Route film/:id -> ok
// - Link (react-router-dom) pour chaque <TuileFilm /> (ref : https://knowbody.github.io/react-router-docs/api/Link.html) -> ok
// - Composant Film -> ok
// - Commencer votre CSS -> ok
// - Route et composants 404 -> ok

// À faire suite au cours 9
// - Dynamiser la page d'un film (useParams, ref : https://reactrouter.com/en/main/hooks/use-params) -> ok
// - Ajouter un séparateur entre les genres du tableau de genres d'un film
// - Mise en page composants et interactivité

// À faire suite au cours 10
// - Les autres filtres (une seule fonction), soit :
// 	- 'Titre alphabétique (A-Z)'
// 	- 'Titre alphabétique (Z-A)'
// 	- 'Réalisateur alphabétique (A-Z)'
// 	- 'Réalisateur alphabétique (Z-A)'
// 	- 'Par année (du plus récent)'
// 	- 'Par année (du plus ancien)'

// 	- Query string 
// 		- orderBy
// 			- titre
// 			- realisation- annee

// 		- orderDirection
// 			- asc
// 			- desc

// - Créer un composant Filtre
// - Afficher filtre actif
// - Par défaut, la tuile d'un film affiche l'image et le titre du film, afficher le réalisateur ou l'année si cette information est filtré

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms';
import Filtre from '../Filtre/Filtre';
import Film from '../Film/Film';
import Page404 from '../Page404/Page404';
import './App.css';

function App() {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/film/:id" element={<Film />}/>
        <Route path="/*" element={<Page404 />}/>
      </Routes>
    </Router>
  );
}

export default App;
