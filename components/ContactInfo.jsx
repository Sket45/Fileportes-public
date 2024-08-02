import React from "react";
import Contactinfostyles from "../styles/ContactInfo.module.scss";

import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

import { IoMailOpen } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { useTranslation } from "next-i18next";

const ContactInfo = () => {
  const { t } = useTranslation("common", { keyPrefix: "contactUs" });

  return (
    <div className={Contactinfostyles.container}>
      <div>
        <h1>{t("socials")}</h1>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100064602049751">
            <FaFacebookF />
          </a>
          {/* <a><FaInstagram/></a> */}
        </div>
      </div>
      <div>
        <h1>{t("phone")}</h1>
        <div>
          <b>
            <MdLocalPhone />
          </b>
          <a>606 925 796</a>
        </div>
      </div>
      <div>
        <h1>{t("eMail")}</h1>
        <div className={Contactinfostyles.container_email}>
          <b>
            <IoMailOpen />
          </b>
          <a>Info@fileportes.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
