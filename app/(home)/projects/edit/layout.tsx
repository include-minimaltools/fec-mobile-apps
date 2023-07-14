import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Editar Proyecto",
  description:
    "VI Edición de Feria de Aplicaciones Móviles - Universidad Nacional de Ingeniería",
};

const layout: FC<PropsWithChildren> = ({ children }) => {
  return children;
};
export default layout;
