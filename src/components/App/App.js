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

  const [logging, setLogging] = useState(() => {
    const localStorageUsager = localStorage.getItem('usager');
    const localStorageLogin = localStorage.getItem('estLog');
    return {
      estLog: localStorageLogin || false,
      usager: localStorageUsager || ''
    };
  });

  function login(e) {
    e.preventDefault();
   
    if (e.target.usager.value === 'admin') {
      localStorage.setItem('estLog', 'true');
      localStorage.setItem('usager', 'admin');    
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value}));

      e.target.reset();
    }
  }

  return (
    <AppContext.Provider value={logging}>
      {/* <Router> */}
        <Entete handleLogin={login} />
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