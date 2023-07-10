import Script from "next/script";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />

      <div className="scroll-top-to">
        <i className="ti-angle-up"></i>
      </div>

      <Script strategy="afterInteractive" src="/plugins/jquery/jquery.min.js" />
      <Script
        strategy="afterInteractive"
        src="/plugins/bootstrap/bootstrap.min.js"
      />
      <Script strategy="afterInteractive" src="/plugins/slick/slick.min.js" />
      <Script
        strategy="afterInteractive"
        src="/plugins/fancybox/jquery.fancybox.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/plugins/syotimer/jquery.syotimer.min.js"
      />
      <Script strategy="afterInteractive" src="/plugins/aos/aos.js" />
      {/* <Script strategy="afterInteractive" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgeuuDfRlweIs7D6uo4wdIHVvJ0LonQ6g" /> */}
      <Script strategy="afterInteractive" src="/plugins/google-map/gmap.js" />
      <Script strategy="afterInteractive" src="/js/script.js" />
    </>
  );
};
export default Layout;
