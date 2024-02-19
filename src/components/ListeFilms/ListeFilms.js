import TuileFilm from '../TuileFilm/TuileFilm';
import './ListeFilms.css';

function ListeFilms() {

  // <Link a variavel pode ser o proprio componente to= route vers o filme />
  // ele vai nos enviar a documentacao base
  // return <TuileFilm key={index} data={film}/>

  const listeFilms = [
    { id: 1,titre: 'Film 1', realisateur: 'Billy', annee: '2010' },
    { id: 2,titre: 'Film 2', realisateur: 'Billy', annee: '2011' },
    { id: 3,titre: 'Film 3', realisateur: 'Billy', annee: '2012' }
  ];

  const tuilesFilm = listeFilms.map((film, index) => {
    return <TuileFilm key={index} data={film}/>
  });

  return (
    <main>
      <h2>Liste des Films</h2>
      <div>
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
