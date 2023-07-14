"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => (
  <button className="dropdown-item cursor-poiter" onClick={() => signOut()}>
    Cerrar Sesión
  </button>
);

export default LogoutButton;
