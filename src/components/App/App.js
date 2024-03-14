import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms';
import Film from '../Film/Film';
import Admin from '../Admin/Admin';
import Page404 from '../Page404/Page404';
import './App.css';

export const AppContext = React.createContext();

function App() {

  const location = useLocation();

  // Définition du logging en prenant également en compte le localStorage
  const [logging, setLogging] = useState(() => {
    const localStorageUsager = localStorage.getItem('usager');
    const localStorageLogin = localStorage.getItem('estLog');
    return {
      estLog: localStorageLogin || false,
      usager: localStorageUsager || ''
    };
  });

  // Gestion du login
  function login(e) {
    e.preventDefault();

    if (e.target.usager.value === 'admin') {
        // Gestion do localStorage
        localStorage.setItem('estLog', 'true');
        localStorage.setItem('usager', 'admin');    
        setLogging({ estLog: true, usager: e.target.usager.value});

        e.target.reset();
    }
  }

  // Gestion du logout
  function logout(e) {
    e.preventDefault();

    // Nettoyage du localStorage
    localStorage.clear();   
    setLogging(logging => ({ ...logging, estLog: false, usager: ''}));
  }

  return (
    <AppContext.Provider value={logging}>
      {/* <Router> */}
        <Entete handleLogin={login} handleLogout={logout}/>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" className="active" element={<Accueil />} />
            <Route path="/liste-films" className="active" element={<ListeFilms />} />
            <Route path="/film/:id" element={<Film />}/>
            <Route path="/*" element={<Page404 />}/>
            <Route path="/admin" element={logging.estLog ? <Admin /> : <Navigate to="/" />}/>
          </Routes>
        </AnimatePresence>
      {/* </Router> */}
    </AppContext.Provider>
  );
}

export default App;