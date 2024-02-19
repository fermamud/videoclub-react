import { NavLink } from 'react-router-dom';
import './Entete.css';

function Entete() {
  return (
    <header className="pb-small pt-small">
      <NavLink to="/"><h1>Video Club</h1></NavLink>    
      <nav>
        <NavLink to="/liste-films">Liste des Films</NavLink>
      </nav>
    </header>
  );
}

export default Entete;
