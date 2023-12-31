import Image from "next/image";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";
import { LoginButton } from "./index";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import Link from "next/link";
import { EditorCollection } from "~/firebase/database";
import ProjectMenu from "./ProjectMenu";
import AdminNavItem from "./AdminNavItem";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  const editor = await new EditorCollection().exists(session?.user?.email);

  return (
    <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0 shadow-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logos/uni-logotipo.png"
            width={64.8}
            height={40}
            alt="logo-universidad"
          />
          <Image
            src="/images/logos/fec.png"
            width={53.2}
            height={40}
            alt="logo-facultad"
          />
          <Image
            src="/images/logos/logo.png"
            width={66.8}
            height={40}
            alt="logo"
          />
        </Link>
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
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="/#testimonial">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#v-edition">
                V Edición
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#judges">
                Jurado
              </a>
            </li>
            <AdminNavItem />
            <ProjectMenu />
            {session ? (
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
                  {editor && (
                    <Link
                      href="/projects/edit"
                      className="dropdown-item cursor-poiter"
                    >
                      Editar proyecto
                    </Link>
                  )}
                  <LogoutButton />
                </div>
              </li>
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
