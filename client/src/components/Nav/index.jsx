import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Singup from "../../pages/Signup";
import Login from "../../pages/Login";

import './style.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
        <Singup>
    
        </Singup>
        <Login>

        </Login>
      </>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <div className="title">
            <span role="img" aria-label="shopping bag">
            OpenAir NFT Market Place
            </span>
          </div>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
