import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Film.css';

// mesma coisa do listeFilms mudando o fetch, ele tera o Id
// useParams
// meus generos tbm preciso entrar no tableau e formatar

function Film() {

    const filmId = useParams();
    // console.log(filmId);

    // const urlFilm = `https://four1f-node-api.onrender.com/films/${filmId.id}`;
    const urlFilm = `https://demo-en-classe.onrender.com/api/films/${filmId.id}`;
    
    const [infoFilm, setInfoFilm] = useState({});

    useEffect(() => {

        fetch(urlFilm)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);
                // console.log(data.titreVignette);
                console.log(data.notes);
                setInfoFilm(data);
                // add aqui as coisas do fetch
            });
    }, []);


    const tableauGenres = infoFilm.genres || []; 
    // console.log(tableauGenres);
    const genres = tableauGenres.join(', ');

    // tinha isso antes, agora vamos ver se continuara assim

    // const tableauNotes = infoFilm.notes || [];
    // const notes = tableauNotes.join(', ');

    // async function soumettreNote() {
        // dicas da aula
        // fazer tudo funcionar no Film e dps criar um composante pra Vote dps que tudo funcionar
        // appel fetch ficara dentro do Film e faz com o handle

    async function soumettreNote(note) {
        // console.log(note);

        let aNotes;
        let nbNotesDonnees;
        let somme = 0;

        if(!infoFilm.notes) {
            // esse 1 sera dinamico
            // arredondar average com duas ou uma casa decimal
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

        function setMoyenne() {
            console.log('setMoyenne');
            
        }

        function setNbVote(nbVote) {
            // console.log('setNbVote');
            nbNotesDonnees = nbVote;
            console.log(nbNotesDonnees);
        }

        Promise.all([putNote, getFilm])
            .then((reponse) => reponse[1].json())
            .then((data) => {
                // console.log(data);
                // console.log(data.notes);
                // console.log(data.notes.length);
                setInfoFilm(data);
                setMoyenne(somme, note);
                setNbVote(data.notes.length);
                // usar o mesmo mecanismo dentro do useEffect
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
                    <p><strong>Genre : </strong>
                        {genres}
                    </p>
                    {/* <p>Notes: {infoFilm.notes}</p> */}
                    {/* <p><strong>Notes : </strong>
                        {notes}
                    </p> */}
                </div>
            </div>


            <button onClick={() => soumettreNote(1)}>Vote 1</button>
            <button onClick={() => soumettreNote(2)}>Vote 2</button>
            <button onClick={() => soumettreNote(3)}>Vote 3</button>
            <button onClick={() => soumettreNote(4)}>Vote 4</button>
            <button onClick={() => soumettreNote(5)}>Vote 5</button>
        </main>
    )
}

export default Film;