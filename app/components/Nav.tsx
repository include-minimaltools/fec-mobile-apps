import Image from "next/image";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";
import { LoginButton } from ".";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="navbar fixed-top main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
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
            <li className="nav-item @@contact navbar-nav-scroll">
              <a className="nav-link page-scroll" href="#testimonial">
                Testimonios
              </a>
            </li>
            {session ? (
              <>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-list-4"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar-list-4">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Image
                          src={
                            session.user?.image ??
                            "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                          }
                          width="35"
                          height="35"
                          className="rounded-circle"
                          alt="avatar"
                        />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <LogoutButton />
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <LoginButton />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
