import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App/App';
import './Entete.css';

function Entete(props) {

  const context = useContext(AppContext);
  
  console.log(props);

  return (
    // em sala de aula

    // <header className="pb-small pt-small">
    //   <NavLink to="/"><h1>Video Club</h1></NavLink>    
    //   <nav>
    //     {/* {props.estLog ? <NavLink to="/admin">Admin</NavLink> : ''} */}
    //     {/* {props.logging.estLog ? <NavLink to="/admin">Admin</NavLink> : ''} */}
    //     {context.estLog ? <NavLink to="/admin">Admin</NavLink> : ''}
    //     <NavLink to="/liste-films">Liste des Films</NavLink>
    //   </nav>

    //   <form onSubmit={props.handleLogin}>
    //     <input type='text' name="usager" placeholder="Login"></input>
    //     <button>Login</button>
    //   </form>
    // </header>


    <header>
        <div className="logo-container">
            <NavLink to="/">
              {/* <img className="logo" src="../../../icones/logo.svg" alt="" /> */}
              </NavLink>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink className="active" to="/liste-films">Liste des Films</NavLink>
                </li>
                <li>  
                  {/* {context.estLog ? <NavLink to="/admin">Logado - fazer logout</NavLink> : ''} */}
                  {(context.estLog || localStorage.getItem('estLog') === 'true' || localStorage.getItem('usager') === 'admin') ? 
                    <NavLink to="/admin">Admin</NavLink> : 
                    <form onSubmit={props.handleLogin}>
                      <input type='text' name="usager" placeholder="Login"></input>
                      <button>Login</button>
                    </form>
                  }
                </li>
                {/* <li>
                  <form onSubmit={props.handleLogin}>
                    <input type='text' name="usager" placeholder="Login"></input>
                    <button>Login</button>
                  </form>
                </li> */}
            </ul>
        </nav>
    </header>
  );
}

export default Entete;
