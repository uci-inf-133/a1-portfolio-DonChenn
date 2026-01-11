import resume from "../../../public/Donovan_Chen_2026.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav>
        {/* name button */}
        <div className="home_button">
          <Link to="/">Donovan Chen</Link>
        </div>

        {/* nav buttons */}
        <div className="nav_buttons">
          <Link to="/projects">Projects</Link>
          <a href={resume} target="_blank">
            Resumé
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
