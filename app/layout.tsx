import "./scss/style.scss";
import "~/public/plugins/bootstrap/bootstrap.min.css";
import "~/public/plugins/themify-icons/themify-icons.css";
import "~/public/plugins/slick/slick.css";
import "~/public/plugins/slick/slick-theme.css";
import "~/public/plugins/fancybox/jquery.fancybox.min.css";
import "~/public/plugins/aos/aos.css";

import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { getServerSession } from "next-auth";
import { SessionProvider } from "~/context";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { clsx } from "clsx";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feria de Aplicaciones Móviles",
  description:
    "VI Edición de Feria de Aplicaciones Móviles - Universidad Nacional de Ingeniería",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={clsx(lora.className, "body-wrapper")}
        data-spy="scroll"
        data-target=".privacy-nav"
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
