import resume from "../../../public/Donovan_Chen_2026.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="d-flex align-items-baseline justify-content-between px-5 py-4">
        {/* name button */}
        <div className="logo">
          <Link className="logo-name h4 text-decoration-none text-dark" to="/">Donovan Chen</Link>
        </div>

        {/* nav buttons */}
        <ul className="nav-links d-flex list-unstyled m-0 gap-4">
          <li>
            <Link to="/projects" className="text-decoration-none text-dark">Projects</Link>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href={resume} target="_blank">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
