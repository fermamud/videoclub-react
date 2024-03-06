import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filtre from './Filtre';


describe('Composant Filtres', () => {

    test('Vérifie la gestion du click et de l\'affichage du filtre actif', async () => {

        // Mock de la fonction handleFiltres
        const handleFiltre = jest.fn();

        render(<Filtre handleFiltre={handleFiltre} />);

        const filterItem = screen.getByText('Titre alphabétique (A-Z)');
        fireEvent.click(filterItem);

        expect(handleFiltre).toHaveBeenCalled();

        // const elFiltreActif = screen.getByTestId('filtreActif');
        // const elFiltreActif = screen.getByTestId('actif');

        const elFiltreActif = document.querySelector('.actif');
        console.log(elFiltreActif);
        await waitFor(() => {
            expect(elFiltreActif.textContent).toBe('Titre alphabétique (A-Z)');
        });
    });
});