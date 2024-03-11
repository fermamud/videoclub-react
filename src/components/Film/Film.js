import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../App/App';
import Note from '../Note/Note'; 
import Commentaires from '../Commentaires/Commentaires';
import './Film.css';

function Film() {

    const context = useContext(AppContext);
    const utilizateur = localStorage.getItem('usager');

    const filmId = useParams();
    const urlFilm = `https://demo-en-classe.onrender.com/api/films/${filmId.id}`;
    
    const [infoFilm, setInfoFilm] = useState({});
    const [nbVotes, setNbVote] = useState('Aucun vote enregistré');
    const [average, setAverage] = useState(0); 
    
    useEffect(() => {
        fetch(urlFilm)
        .then((reponse) => reponse.json())
        .then((data) => {
            setInfoFilm(data);
            if (data.notes) {
                setNbVote(data.notes.length);
                setMoyenne(data.notes, data.notes.length);
            }
        });
        // eslint-disable-next-line 
    }, []);
    
    const tableauGenres = infoFilm.genres || []; 
    const genres = tableauGenres.join(', ');

    function setMoyenne(tableauNotes, nbNotesDonnees) {
        const total = tableauNotes.reduce((somme, note) => {
            return somme += note;
        }, 0);

        const average = (total / nbNotesDonnees).toFixed(2);
        setAverage(average);
    }
    
    async function appelAsync(array, cle) {
        console.log(array);
        console.log(cle);

        const requestBody = { [cle]: array };

        const oOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }

        let putInfo = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);

        Promise.all([putInfo, getFilm])
            .then((reponse) => reponse[1].json())
            .then((data) => {
                console.log(data);
                setInfoFilm(data);
                setNbVote(data.notes.length);
                setMoyenne(data.notes, data.notes.length);
            })
    }

    async function soumettreNote(note) {
        let aNotes;

        if(!infoFilm.notes) {
            aNotes = [note];  
        } else {
            aNotes = infoFilm.notes;
            aNotes.push(note);
        }

        appelAsync(aNotes, 'notes');
    }

    async function soumettreCommentaire(event) {
        let aCommentaires;

        if(!infoFilm.commentaires) { 
            aCommentaires = [{ commentaire: event, usager: context.usager}];  
        } else {
            aCommentaires = infoFilm.commentaires;
            aCommentaires.push({ commentaire: event, usager: utilizateur });
        }
        console.log(aCommentaires);
        appelAsync(aCommentaires, 'commentaires');
    }

    const tableauCommentaires = infoFilm.commentaires || [];
    const comRef = tableauCommentaires.map((chaque, index) => {
        return  <div className="commentaire" key={index}>
                    <p><strong>Auteur : </strong>{chaque.usager}</p>
                    <p><strong>Commentaire : </strong>{chaque.commentaire}</p>
                </div>
    }); 

    return (
        <main>
            <div className="container-info-film">
                <img className="image" src={`/img/${infoFilm.titreVignette}`} alt={infoFilm.titre} />
                <div className="info-film">
                    {/* <p><strong>Titre : </strong>{infoFilm.titre}</p> */}
                    {/* pequeno */}
                    {/* <p><strong>Genres : </strong>
                        {genres}
                    </p> */}

                    <p>{genres}</p>

                    {/* grande */}
                    <p className="info-film__titre"><strong>{infoFilm.titre}</strong></p>
                    {/* menos grande */}
                    {/* <p><strong>Realisation : </strong>{infoFilm.realisation}</p> */}
                    <p className="info-film__realisation"><strong>{infoFilm.realisation}</strong></p>
                    {/* todos os mesmo tamanho aqui */}
                    {/* <p><strong>Année : </strong>{infoFilm.annee}</p> */}
                    <p><strong>{infoFilm.annee}</strong></p>
                    <p><strong>Description : </strong>{infoFilm.description}</p>

                    {/* <p>Votes : {nbVotes}</p> */}
                    {/* <p><strong>Average : </strong>{average}</p> */}
                </div>
            </div>
            <Note handleVote={nbVotes} handleAverage={average} handleNote={soumettreNote} />
            {/* <Note handleNote={(note) => soumettreNote(note)} /> */}
            <div className="blocCommentaire">
                {(context.estLog) ?
                    <Commentaires handleCommentaire={soumettreCommentaire} /> :
                    ''
                }
            </div>
            <div className="commentaires">
                {comRef}
            </div>
        </main>
    )
}

export default Film;
