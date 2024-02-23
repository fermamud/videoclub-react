import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Film.css';

// mesma coisa do listeFilms mudando o fetch, ele tera o Id
// useParams
// meus generos tbm preciso entrar no tableau e formatar

function Film() {

    const filmId = useParams();
    console.log(filmId);
    
    //const urlFilm = `https://four1f-node-api.onrender.com/films/${filmId.id}`;
    const urlFilm = `https://demo-en-classe.onrender.com/api/films/${filmId.id}`;
    console.log(urlFilm);
    const [infoFilm, setInfoFilm] = useState([]);

    useEffect(() => {

        fetch(urlFilm)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);
                console.log(data.titreVignette);
                setInfoFilm(data);
            });
    }, []);

    const tableauGenres = infoFilm.genres || []; 
    console.log(tableauGenres);
    const genres = tableauGenres.join(', ');

    const tableauNotes = infoFilm.notes || [];
    const notes = tableauNotes.join(', ');

    //console.log(infoFilm);
    console.log(genres);
    return (
        <div>
            <p>{infoFilm.titre}</p>
            <p>{infoFilm.description}</p>
            <p>{infoFilm.realisation}</p>
            <p>{infoFilm.annee}</p>
            <p>
                {genres}
            </p>
            <p>
                {notes}
            </p>
            {/* <img src={`/../img/${infoFilm.titreVignette}`} alt={infoFilm.titre} /> */}
            <img src={`/img/${infoFilm.titreVignette}`} alt={infoFilm.titre} />

        </div>
    )
}

export default Film;