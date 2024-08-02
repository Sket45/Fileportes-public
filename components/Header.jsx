import Headerstyles from "../styles/Header.module.scss";
import Buttonstyles from "../styles/Button.module.scss";
import TransformButton from "./quickQuote.jsx";
import ContactForm from "./Contactform.jsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { transform } from "typescript";

const Header = () => {
  const variants = {
    slide: {
      width: "300vw",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 15,
      },
    },

    turnWheels: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 0.5,
      },
    },

    bounce: {
      y: ["0%", "2.5%", "0%"],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const [changedWidth, setChangedWidth] = useState({
    width: "calc(300vw + 1270px)",
  });

  useEffect(() => {
    const handleResize = async () => {
      setChangedWidth({
        width: `calc(${window.innerWidth}px * 3 + 1270px) !important`,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={Headerstyles.container}>
        <ContactForm pageStyle={"Main"} />
        <div className={Headerstyles.carWrapper}>
          <motion.div className={Headerstyles.header_container}>
            <motion.div
              className={Headerstyles.header_container_car}
              variants={variants}
              animate="bounce"
            ></motion.div>
            <div className={Headerstyles.header_container_car_wheelWrapper}>
              <div>
                <motion.div
                  className={
                    Headerstyles.header_container_car_wheelWrapper_leftWheel
                  }
                  variants={variants}
                  animate="turnWheels"
                ></motion.div>
                <div
                  className={
                    Headerstyles.header_container_car_wheelWrapper_leftTire
                  }
                ></div>
              </div>
              <div>
                <motion.div
                  className={
                    Headerstyles.header_container_car_wheelWrapper_rightWheel
                  }
                  variants={variants}
                  animate="turnWheels"
                ></motion.div>
                <div
                  className={
                    Headerstyles.header_container_car_wheelWrapper_rightTire
                  }
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={Headerstyles.wrapper}>
        <motion.div
          className={Headerstyles.header}
          style={changedWidth}
          variants={variants}
          animate="slide"
        ></motion.div>
      </div>
    </>
  );
};

export default Header;
