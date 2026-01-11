import resume from '../../../public/Donovan_Chen_2026.pdf'

function NavBar() {
  return (
    <header>
      {/* <!-- Navigation Bar --> */}
      <nav>
        {/* <!-- name button --> */}
        <div className="home">
          <a href="index.html">Donovan Chen</a>
        </div>

        {/* <!-- nav buttons --> */}
        <div className="nav_buttons">
          <a href="prjects.htmol">Projects</a>
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
