import { useEffect, useState } from 'react';
import TuileFilm from '../TuileFilm/TuileFilm';
import Filtre from '../Filtre/Filtre';
import { Link } from 'react-router-dom';
import './ListeFilms.css';
// olhar o exercicio do compteur pra fazer o Filtre (componente)

function ListeFilms() {

  // <Link a variavel pode ser o proprio componente to= route vers o filme />
  // ele vai nos enviar a documentacao base
  // return <TuileFilm key={index} data={film}/>

  // teste
  // const [etat, setEtat] = useState(true);
  // const [etatTest, setEtatTest] = useState(false);

  //const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  // const urlListeFilms = 'https://demo-en-classe.onrender.com/api/films';
  const urlListeFilms = 'data/titre-asc.json';
  const [urlFiltre, setUrlFiltre] = useState([urlListeFilms]);

  const [listeFilms, setListeFilms] = useState([]);

  // const listeFilms = [
  //   { id: 1,titre: 'Film 1', realisateur: 'Billy', annee: '2010' },
  //   { id: 2,titre: 'Film 2', realisateur: 'Billy', annee: '2011' },
  //   { id: 3,titre: 'Film 3', realisateur: 'Billy', annee: '2012' }
  // ];

  // console.log('rendu');
  // teste
  // useEffect(() => {

  //   console.log('rendu');
  
  // }, [etat, etatTest]);
  // fim teste

  useEffect(() => {
    // console.log('rendu');
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListeFilms(data);
      });
  }, [urlFiltre]);


  const tuilesFilm = listeFilms.map((film, index) => {
    // o link do filme deve ser aqui. nao no tuille
    // return <Link key={index} data={film} to={`/film/${film.id}`} activeclassname="active">
    // return <TuileFilm key={index} data={film} />

    return <Link key={index} data={film} to={`/film/${film.id}`} activeclassname="active">
              <TuileFilm key={index} data={film}/>
            </Link>
    
  });

  function filtre(filtre) {
    // console.log('filtre');
    // console.log(e.target);
    // const elFiltre = e.target;
    // const elFiltreContent = elFiltre.textContent; 
    // console.log(elFiltreContent);

    // if (elFiltreContent == 'Titre alphabétique (A-Z)') {
    //   setUrlFiltre('data/titre-asc.json');
    // }

    setUrlFiltre(filtre);


    // setUrlFiltre(`${urlListeFilms}?tri=realisation&orderDirection=asc`);
    // gerar dinamicamente, nao seis funcoes, 2 opcoes : passar url em argumento ou pego o elemento do target com estrutura condicional
    // a funcao filtre vai estar no componente filtre
    //setUrlFiltre('data/realisation-asc.json');
  }

  function maDeuxiemeFunction() {
    console.log('segunda funcao');
  }

  return (
    <main>

      {/* <button onClick={() => setEtat(!etat)}>Change etat</button>
      <p>{JSON.stringify(etat)}</p>
      <button onClick={() => setEtatTest(!etatTest)}>Change etat</button>
      <p>{JSON.stringify(etatTest)}</p> */}

      {/* <h2>Liste des Films</h2> */}

      {/* <ul>
        <li onClick = {() => setUrlFiltre('data/realisation-asc.json')}>Réalisateur alphabétique (A-Z)</li>
      </ul> */}

      {/* esse trecho ira para o composant filtre */}

      {/* <Filtre url={urlListeFilms}/> */}

      <ul>
        <li onClick = {() => {filtre('data/titre-asc.json'); maDeuxiemeFunction()}}>Titre alphabétique (A-Z)</li>
        <br />
        <li onClick = {() => {filtre('data/titre-desc.json'); maDeuxiemeFunction()}}>Titre alphabétique (Z-A)</li>
        <br />
        <li onClick = {() => {filtre('data/realisation-asc.json'); maDeuxiemeFunction()}}>Réalisateur alphabétique (A-Z)</li>
        <br />
        <li onClick = {() => {filtre('data/realisation-desc.json'); maDeuxiemeFunction()}}>Réalisateur alphabétique (Z-A)</li>
        <br />
        <li onClick = {() => {filtre('data/annee-desc.json'); maDeuxiemeFunction()}}>Par année (du plus récent)</li>
        <br />
        <li onClick = {() => {filtre('data/annee-asc.json'); maDeuxiemeFunction()}}>Par année (du plus ancien)</li>
      </ul>

      <div>
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
