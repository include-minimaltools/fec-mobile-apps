import Image from "next/image";

const Nav = () => {
  return (
    <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image
            src="/images/logos/uni-logotipo.png"
            width={70}
            height={40}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="ti-menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown @@home">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Proyectos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item @@home1" href="#rommies">
                    Rommies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#unipassid">
                    UNI Pass ID
                  </a>
                </li>
                <li>
                  <a className="dropdown-item @@home3" href="#veterinaria">
                    Veterinaria
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item @@about">
              <a className="nav-link" href="#v-edition">
                V Edición
              </a>
            </li>
            <li className="nav-item @@contact">
              <a className="nav-link" href="#testimonial">
                Testimonios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
