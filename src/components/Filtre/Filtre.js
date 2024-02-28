import './Filtre.css';
// import { useState } from 'react';


function Filtre(props) {
    // const [activeItem, setActiveItem] = useState('inactif');

    // function setParams(tri, orderBy) {
    //     console.log(tri);
    //     console.log(orderBy);
    //     props.handleFiltre(tri, orderBy);
    // }

    // function maDeuxiemeFunction(tri) {
    //     console.log('segunda funcao');
    //     setActiveItem(tri);
    // }

    
    function alphaAsc() {
        props.handleFiltre('data/titre-asc.json');
    }

    function alphaDesc() {
        props.handleFiltre('data/titre-desc.json');
    }

    function realisationAsc() {
        props.handleFiltre('data/realisation-asc.json')
    }

    function realisationDesc() {
        props.handleFiltre('data/realisation-desc.json')
    }

    function anneeRecent() {
        props.handleFiltre('data/annee-desc.json')
    }

    function anneeAncien() {
        props.handleFiltre('data/annee-asc.json')
    }

    return (
        <ul>
            {/* <li className={activeItem === 'titreAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('titre', 'asc'); maDeuxiemeFunction('titreAsc')}}>Titre alphabétique (A-Z)</li>
            <li className={activeItem === 'titreDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('titre', 'desc'); maDeuxiemeFunction('titreDesc')}}>Titre alphabétique (Z-A)</li>
            <li className={activeItem === 'realisationAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('realisation', 'asc'); maDeuxiemeFunction('realisationAsc')}}>Réalisateur alphabétique (A-Z)</li>
            <li className={activeItem === 'realisationDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('realisation', 'desc'); maDeuxiemeFunction('realisationDesc')}}>Réalisateur alphabétique (Z-A)</li>
            <li className={activeItem === 'anneeDesc' ? 'actif' : 'inactif'} onClick = {() => {setParams('annee', 'desc'); maDeuxiemeFunction('anneeDesc')}}>Par année (du plus récent)</li>
            <li className={activeItem === 'anneeAsc' ? 'actif' : 'inactif'} onClick = {() => {setParams('annee', 'asc'); maDeuxiemeFunction('anneeAsc')}}>Par année (du plus ancien)</li> */}
            
            <li onClick = {alphaAsc}>Titre alphabétique (A-Z)</li>
            <br />
            <li onClick = {alphaDesc}>Titre alphabétique (Z-A)</li>
            <br />
            <li onClick = {realisationAsc}>Réalisateur alphabétique (A-Z)</li>
            <br />
            <li onClick = {realisationDesc}>Réalisateur alphabétique (Z-A)</li>
            <br />
            <li onClick = {anneeRecent}>Par année (du plus récent)</li>
            <br />
            <li onClick = {anneeAncien}>Par année (du plus ancien)</li>
        </ul>
    )
}

export default Filtre;
