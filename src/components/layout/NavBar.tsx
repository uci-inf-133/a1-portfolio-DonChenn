import resume from "../../../public/Donovan_Chen_2026.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav>
        {/* name button */}
        <div className="logo">
          <Link to="/">Donovan Chen</Link>
        </div>

        {/* nav buttons */}
        <ul className="nav_buttons">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href={resume} target="_blank">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
