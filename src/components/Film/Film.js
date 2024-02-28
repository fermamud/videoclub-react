import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Film.css';

// mesma coisa do listeFilms mudando o fetch, ele tera o Id
// useParams
// meus generos tbm preciso entrar no tableau e formatar

function Film() {

    const filmId = useParams();
    // console.log(filmId);

    const urlFilm = `https://four1f-node-api.onrender.com/films/${filmId.id}`;
    // const urlFilm = `https://demo-en-classe.onrender.com/api/films/${filmId.id}`;
    
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
        <main>
            <div className="container-info-film">
                <img className="image" src={`/img/${infoFilm.titreVignette}`} alt={infoFilm.titre} />
                <div className="info-film">
                    <p><strong>Titre : </strong>{infoFilm.titre}</p>
                    <p><strong>Description : </strong>{infoFilm.description}</p>
                    <p><strong>Realisation : </strong>{infoFilm.realisation}</p>
                    <p><strong>Année : </strong>{infoFilm.annee}</p>
                    <p><strong>Genre : </strong>
                        {genres}
                    </p>
                    <p><strong>Notes : </strong>
                        {notes}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Film;