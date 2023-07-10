"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => (
  <a className="dropdown-item cursor-poiter" onClick={() => signOut()}>
    Cerrar Sesión
  </a>
);

export default LogoutButton;
