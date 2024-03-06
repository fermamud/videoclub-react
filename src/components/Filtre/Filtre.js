import './Filtre.css';
import { useState } from 'react';


function Filtre(props) {
    const [activeItem, setActiveItem] = useState('inactif');

    function setParams(tri, orderBy) {
        props.handleFiltre(tri, orderBy);
    }

    function maDeuxiemeFunction(tri) {
        setActiveItem(tri);
    }

    return (
        <ul>
            <li data-testid="actif" className={activeItem === 'titreAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('titre', 'asc'); maDeuxiemeFunction('titreAsc')}}>Titre alphabétique (A-Z)</li>
            <li className={activeItem === 'titreDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('titre', 'desc'); maDeuxiemeFunction('titreDesc')}}>Titre alphabétique (Z-A)</li>
            <li className={activeItem === 'realisationAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('realisation', 'asc'); maDeuxiemeFunction('realisationAsc')}}>Réalisateur alphabétique (A-Z)</li>
            <li className={activeItem === 'realisationDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('realisation', 'desc'); maDeuxiemeFunction('realisationDesc')}}>Réalisateur alphabétique (Z-A)</li>
            <li className={activeItem === 'anneeDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('annee', 'desc'); maDeuxiemeFunction('anneeDesc')}}>Par année (du plus récent)</li>
            <li className={activeItem === 'anneeAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('annee', 'asc'); maDeuxiemeFunction('anneeAsc')}}>Par année (du plus ancien)</li>
        </ul>
    )
}
// data-testid="actif"

export default Filtre;
