import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../App/App';
import './Entete.css';

function Entete(props) {
  console.log(props);
  const context = useContext(AppContext);
  const location = useLocation();

  const estAccueil = location.pathname === "/" ? true : false; 

  return (
    <header className={estAccueil ? "accueil-header" : ""}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/liste-films">Liste des Films</NavLink>
                </li>
                <li>
                  {(context.estLog === 'true' || context.usager === 'admin') ? 
                    <NavLink to="/admin">Admin</NavLink> : 
                    <form className="form-login" onSubmit={props.handleLogin}>
                      <input type='text' name="usager" placeholder="Login"></input>
                      <button>Login</button>
                    </form>
                  }
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Entete;
