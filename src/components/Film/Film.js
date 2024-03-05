import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../App/App';
import Note from '../Note/Note'; 
import Commentaires from '../Commentaires/Commentaires';
import './Film.css';

function Film() {

    const context = useContext(AppContext);
    const utilizateur = localStorage.getItem('usager');
    console.log(utilizateur);


    // const urlFilm = `https://four1f-node-api.onrender.com/films/${filmId.id}`;
    // console.log(filmId);
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
    
    const tableauNotes = infoFilm.notes || [];
    const notes = tableauNotes.join(', ');


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
        console.log(note);
        let aNotes;

        if(!infoFilm.notes) {
            aNotes = [note];  
        } else {
            aNotes = infoFilm.notes;
            aNotes.push(note);
        }

        appelAsync(aNotes, 'notes');
        // const oOptions = {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({notes: aNotes})
        // }

        // let putNote = await fetch(urlFilm, oOptions),
        //     getFilm = await fetch(urlFilm);

        // Promise.all([putNote, getFilm])
        //     .then((reponse) => reponse[1].json())
        //     .then((data) => {
        //         setInfoFilm(data);
        //         setNbVote(data.notes.length);
        //         setMoyenne(data.notes, data.notes.length);
        //     })
    }

    // let blocAjoutCommentaire;

    // if (context.estLog || localStorage.getItem('estLog') === 'true' || localStorage.getItem('usager') === 'admin') {
    //     blocAjoutCommentaire = <form onSubmit={soumettreCommentaire}>
    //                                 <textarea name="commentaire" placeholder='Ajouter votre commentaires'></textarea>
    //                                 <button>Soumettre</button>
    //                             </form>   
    // }

    async function soumettreCommentaire(event) {
        // e.preventDefault();
        let aCommentaires;

        if(!infoFilm.commentaires) {
            // aCommentaires = [{ commentaire: event, usager: context.usager}];  
            aCommentaires = [{ commentaire: event, usager: context.usager}];  
        } else {
            aCommentaires = infoFilm.commentaires;
            // aCommentaires.push({ commentaire: event, usager: context.usager });
            aCommentaires.push({ commentaire: event, usager: utilizateur });
        }
        console.log(aCommentaires);
        appelAsync(aCommentaires, 'commentaires');
        // appelAsync() uma so chamada com diferentes argumentos pras duas
        // pra um sera { commentaire: 'Je suis un commentaire', usager: context.usager }
        // pra outro note
        // body: JSON.stringify(data)

        // const oOptions = {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({commentaires: aCommentaires})
        // }

        // let putCommentaire = await fetch(urlFilm, oOptions),
        //     getFilm = await fetch(urlFilm);

        // Promise.all([putCommentaire, getFilm])
        //     .then((reponse) => reponse[1].json())
        //     .then((data) => {
        //         console.log(data);
        //         setInfoFilm(data);
        //     })
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
                    <p><strong>Titre : </strong>{infoFilm.titre}</p>
                    <p><strong>Description : </strong>{infoFilm.description}</p>
                    <p><strong>Realisation : </strong>{infoFilm.realisation}</p>
                    <p><strong>Année : </strong>{infoFilm.annee}</p>
                    <p><strong>Genres : </strong>
                        {genres}
                    </p>
                    <p><strong>Note{(tableauNotes.length > 1) ? 's' : ''} : </strong>
                        {(tableauNotes.length > 0) ? notes : 'Aucune note enregistré'}
                    </p>
                    <p>Votes: {nbVotes}</p>
                    <p>Average: {average}</p>
                </div>
            </div>
            <Note handleNote={soumettreNote} />

            <div className="blocCommentaire">
                {(context.estLog || localStorage.getItem('estLog') === 'true' || localStorage.getItem('usager') === 'admin') ?
                    <Commentaires handleCommentaire={soumettreCommentaire} /> :
                    ''
                }
            </div>
            {/* <div className="blocCommentaire">
                {blocAjoutCommentaire}
            </div> */}
            <div className="commentaires">
                {comRef}
            </div>
        </main>
    )
}

export default Film;
