import { NavLink } from 'react-router-dom';
//import './Entete.css';

function Entete() {
  return (
    // em sala de aula

    <header className="pb-small pt-small">
      <NavLink to="/"><h1>Video Club</h1></NavLink>    
      <nav>
        <NavLink to="/liste-films">Liste des Films</NavLink>
      </nav>
    </header>

    // <header>
    //     <div class="logo-container">
    //         <NavLink to="/">
    //           <img class="logo" src="../../../icones/logo.svg" alt="" />
    //           </NavLink>
    //     </div>
    //     <nav>
    //         <ul>
    //             <li>
    //                 {/* <a class="active" href="accueil.html">Liste des Films</a> */}
    //                 <NavLink className="active" to="/liste-films">Liste des Films</NavLink>
    //             </li>
    //             <li>
    //                 <a href="film.html">Film</a>
    //             </li>
    //             <li>
    //                 <a href="">Login</a>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>
  );
}

export default Entete;
