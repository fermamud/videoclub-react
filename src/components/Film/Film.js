import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Note from '../Note/Note';
import './Film.css';

function Film() {
    // const urlFilm = `https://four1f-node-api.onrender.com/films/${filmId.id}`;
    // console.log(filmId);
    const filmId = useParams();
    const urlFilm = `https://demo-en-classe.onrender.com/api/films/${filmId.id}`;
    
    const [infoFilm, setInfoFilm] = useState({});
    const [nbVotes, setNbVote] = useState('Aucun vote enregistré');
    const [average, setAverage] = useState(0);
 
    function setMoyenne(tableauNotes, nbNotesDonnees) {
        const total = tableauNotes.reduce((somme, note) => {
            return somme += note;
        }, 0);

        const average = (total / nbNotesDonnees).toFixed(2);
        setAverage(average);
    }

    useEffect(() => {
        fetch(urlFilm)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);
                setInfoFilm(data);
                if (data.notes) {
                    setNbVote(data.notes.length);
                    setMoyenne(data.notes, data.notes.length);
                }
            });
    }, []);

    const tableauGenres = infoFilm.genres || []; 
    const genres = tableauGenres.join(', ');

    const tableauNotes = infoFilm.notes || [];
    const notes = tableauNotes.join(', ');
    console.log(notes);

    // fazer tudo funcionar no Film e dps criar um composante pra Vote dps que tudo funcionar
    // appel fetch ficara dentro do Film e faz com o handle

    async function soumettreNote(note) {
        let aNotes;

        if(!infoFilm.notes) {
            aNotes = [note];  
        } else {
            aNotes = infoFilm.notes;
            aNotes.push(note);
        }

        const oOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({notes: aNotes})
        }

        let putNote = await fetch(urlFilm, oOptions),
            getFilm = await fetch(urlFilm);

        Promise.all([putNote, getFilm])
            .then((reponse) => reponse[1].json())
            .then((data) => {
                setInfoFilm(data);
                setNbVote(data.notes.length);
                setMoyenne(data.notes, data.notes.length);
            })

        // fetch(urlFilm, oOptions)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //          aqui fariamos nossa segunda fetch, mas fizemos como acima pra ser mais elegante
        //     })

    }

    return (
        <main>
            <div className="container-info-film">
                <img className="image" src={`/img/${infoFilm.titreVignette}`} alt={infoFilm.titre} />
                <div className="info-film">
                    <p><strong>Titre : </strong>{infoFilm.titre}</p>
                    <p><strong>Description : </strong>{infoFilm.description}</p>
                    <p><strong>Realisation : </strong>{infoFilm.realisation}</p>
                    <p><strong>Année : </strong>{infoFilm.annee}</p>
                    <p><strong>Genres : </strong>
                        {genres}
                    </p>
                    <p><strong>Note{(tableauNotes.length > 1) ? 's' : ''} : </strong>
                    {/* {notes} */}
                        {(tableauNotes.length > 0) ? notes : 'Aucune note enregistré'}
                    </p>
                    <p>Votes: {nbVotes}</p>
                    <p>Average: {average}</p>
                </div>
            </div>
            <Note handleNote={soumettreNote}/>
        </main>
    )
}

export default Film;
