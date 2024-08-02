import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modalstyles from "../styles/Modal.module.scss";
import Buttonstyles from "../styles/Button.module.scss";
import { useTranslation } from "next-i18next";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal }) => {
  const { t, i18n } = useTranslation("common", { keyPrefix: "modal" });

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className={Modalstyles.container}
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={Modalstyles.container_modal} variants={modal}>
            <p>{t("p")}</p>
            <a
              href={`${i18n.language}`}
              className={Modalstyles.container_modal_button_wrapper}
            >
              <div
                className={`${Buttonstyles.button} ${Modalstyles.container_modal_button}`}
              >
                {t("btn")}
              </div>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
