"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AdminCollection } from "~/firebase/database";
import { Admin } from "~/firebase/models";

const AdminNavItem = () => {
  const session = useSession();
  const [admin, setAdmin] = useState<Admin>();
  const email = session?.data?.user?.email;

  useEffect(() => {
    if (email) new AdminCollection().subscribe(email, setAdmin);
  }, [email]);

  if (!email || !admin || !admin.active) return;

  return (
    <li className="nav-item">
      <a className="nav-link" href="/califications">
        Calificaciones
      </a>
    </li>
  );
};
export default AdminNavItem;
