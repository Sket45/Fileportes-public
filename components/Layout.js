import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavbarActual from "./NavbarActual";

import { FaWhatsapp } from "react-icons/fa";

import { GoogleAnalytics } from "@next/third-parties/google";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarActual />
      <div className={styles.Container}>{children}</div>
      <GoogleAnalytics gaId="G-3T9TVS2ECE" />
      <a
        href="https://api.whatsapp.com/send?phone=34606925796"
        className={styles.whatsapp}
        target="_blank"
      >
        <FaWhatsapp className={styles.whatsapp_icon} />
        <p>Whatsapp</p>
      </a>
      <Footer />
    </>
  );
};

export default Layout;
