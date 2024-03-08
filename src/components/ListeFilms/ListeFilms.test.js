import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListeFilms from './ListeFilms';
import TuileFilm from '../TuileFilm/TuileFilm';


describe('Composant ListeFilms', () => {

    // Objet fictif
    const mockFilm = {
        titre: 'Alien - Le 8ème passager',
        genres: ['Horreur', 'Science-fiction'],
        description: 'Un vaisseau spatial perçoit une transmission non-identifiée comme un signal de détresse...',
        titreVignette: 'alienle8emepassager.jpg',
        realisation: 'Ridley Scott',
        annee: 1979,
        notes: [3, 4, 5, 2, 1],
        commentaires: [
            { commentaire: 'Ccommentaire 1', auteur: 'admin' },
            { commentaire: 'Commentaire 2', auteur: 'admin' },
        ]
    };


    test('Vérifie la tuile d\'un film', () => {

        render(<TuileFilm data={mockFilm} />); // versao ficticia e virtual do composant

        expect(screen.getByText(mockFilm.titre)).toBeInTheDocument();
        const elImg = document.querySelector('img');
        expect(elImg).toHaveAttribute('src', `img/${mockFilm.titreVignette}`);

    });



    /**
     * À faire
     */
    test('Vérifie si les clés sont présentes dans la réponse', async () => {

        // no nosso trabalho sera para todos dentro de um foreach

        // const reponse = await fetch('https://demo-en-classe.onrender.com/api/films/8DEF7nB2b7pDIOnKeRrO');
        // const data = await reponse.json();

        // await waitFor(() => {
        //     expect(data).toHaveProperty('titre');
        //     expect(data).toHaveProperty('genres');
        //     expect(data).toHaveProperty('realisation');
        //     expect(data).toHaveProperty('description');
        //     expect(data).toHaveProperty('annee');
        //     expect(data).toHaveProperty('titreVignette');
        // });
            
        const filmsReponse = await fetch('https://demo-en-classe.onrender.com/api/films');
        const films = await filmsReponse.json();
        films.forEach(async film => {
            const id = film.id;
            const appel = await fetch(`https://demo-en-classe.onrender.com/api/films/${id}`); 
            const data = await appel.json();
            await waitFor(() => {
                    expect(data).toHaveProperty('titre');
                    expect(data).toHaveProperty('genres');
                    expect(data).toHaveProperty('realisation');
                    expect(data).toHaveProperty('description');
                    expect(data).toHaveProperty('annee');
                    expect(data).toHaveProperty('titreVignette');
                });
        });
    });
});