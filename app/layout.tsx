import "./scss/style.scss";
import "~/public/plugins/bootstrap/bootstrap.min.css";
import "~/public/plugins/themify-icons/themify-icons.css";
import "~/public/plugins/slick/slick.css";
import "~/public/plugins/slick/slick-theme.css";
import "~/public/plugins/fancybox/jquery.fancybox.min.css";
import "~/public/plugins/aos/aos.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer, LoginButton, Nav } from "./components";
import { getServerSession } from "next-auth";
import { SessionProvider } from "~/context";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Nav />
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
        <Footer />

        <div className="scroll-top-to">
          <i className="ti-angle-up"></i>
        </div>

        <Script
          strategy="afterInteractive"
          src="plugins/jquery/jquery.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="plugins/bootstrap/bootstrap.min.js"
        />
        <Script strategy="afterInteractive" src="plugins/slick/slick.min.js" />
        <Script
          strategy="afterInteractive"
          src="plugins/fancybox/jquery.fancybox.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="plugins/syotimer/jquery.syotimer.min.js"
        />
        <Script strategy="afterInteractive" src="plugins/aos/aos.js" />
        {/* <Script strategy="afterInteractive" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgeuuDfRlweIs7D6uo4wdIHVvJ0LonQ6g" /> */}
        <Script strategy="afterInteractive" src="plugins/google-map/gmap.js" />
        <Script strategy="afterInteractive" src="js/script.js" />
      </body>
    </html>
  );
}
