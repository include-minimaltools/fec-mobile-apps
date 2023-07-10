"use client";

import { signIn } from "next-auth/react";

const LogoutButton = () => {
  return (
    <li className="nav-item cursor-poiter">
      <a
        className="nav-link"
        onClick={() => {
          try {
            signIn("google");
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Iniciar Sesion
      </a>
    </li>
  );
};
export default LogoutButton;
