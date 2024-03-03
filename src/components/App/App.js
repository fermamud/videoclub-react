// À faire suite au cours 12
// - Gestion Logout
// - Affichage de l'input lorsque logout et du nom de l'usager lorsque login
// - Dynamiser le commentaire soumis à db -> ok
// - Factoriser l'appel asynchrone pour l'ajout d'une note et d'un commentaire
// - Logging ou non, s'il y a un/des commentaire(s), affichez-le(s) (commentaire et auteur) -> ok
// - (bonus) Créer un composant Commentaires
// - (bonus) Persévérance du logging au rechargement de page côté client à l'aide d'un localStorage


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms';
// import Filtre from '../Filtre/Filtre';
import Film from '../Film/Film';
import Admin from '../Admin/Admin';
import Page404 from '../Page404/Page404';
import './App.css';

export const AppContext = React.createContext();

function App() {

  // const [estLog, setEstLog] = useState(false);
  const [logging, setLogging] = useState({estLog: false, usager: ''});

  function login(e) {
    e.preventDefault();
    console.log('login');
   
    if (e.target.usager.value === 'admin') {
      // setEstLog(prevEstLog => !prevEstLog)
      // usa 3 pontos mais se quiser mudar uma coisa so tipo o usager, nesse caso abaixo eh irrelevante
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value}));
      e.target.reset();
    }
  }

  return (
    <AppContext.Provider value={logging}>
      <Router>
        {/* <Entete handleLogin={login} estLog={estLog}/> */}
        <Entete handleLogin={login} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/liste-films" element={<ListeFilms />} />
          <Route path="/film/:id" element={<Film />}/>
          <Route path="/*" element={<Page404 />}/>

          {/* <Route path="/admin" element={estLog ? <Admin /> : <Navigate to="/" />}/> */}
          <Route path="/admin" element={logging.estLog ? <Admin /> : <Navigate to="/" />}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

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


// À faire suite au cours 11
// - Dynamiser la valeur récupérée (de 1 à 5) -> ok
// - Afficher la moyenne des votes (limitée à 2 chiffre suite au point) et le nombre de vote(s) -> ok
// - Gestion vote / votes s'il y a plus d'un vote-> ok
// - Si le film n'a reçu aucun vote, injecter le message 'Aucun vote enregistré' (ou autre) -> ok
// - Mise à jour de la moyenne et du nombre de vote(s) suite à la soumission d'un vote -> ok
// - Interface engageante pour voter et afficher la moyenne / nombre de vote(s) -> ok
// - Créer un composant Vote (ou Note) -> ok



