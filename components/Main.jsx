<link
  href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
  rel="stylesheet"
/>;

import Mainstyles from "../styles/Main.module.scss";
import Buttonstyles from "../styles/Button.module.scss";

import Image from "next/image";
import starSVG from "../public/images/svg/star.svg";

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaTruck,
  FaUserAlt,
  FaCheck,
} from "react-icons/fa";

import { IoMdThumbsUp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { IoMdQuote } from "react-icons/io";

import Slider from "../components/Slider";
import QuoteHead from "./QuoteHead";
import ImageCarousel from "../components/imageCarousel";

import { useTranslation } from "next-i18next";
import { Link } from "@react-email/components";

import { motion } from "framer-motion";

const Main = () => {
  const { t, i18n } = useTranslation("common", { keyPrefix: "main" });

  const { t: t1 } = useTranslation("reviews");
  const reviews = t1("reviews", { returnObjects: true });

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
  };

  return (
    <div className={Mainstyles.main}>
      <section className={Mainstyles.main_smallAbout}>
        <div className={Mainstyles.main_smallAbout_wrapper}>
          <h1>
            <b>{t("smallAbout.h1")}</b>
          </h1>
          <div className={Mainstyles.main_smallAbout_wrapper_divider}></div>
          <p>{t("smallAbout.p")}</p>
        </div>
        <div className={Mainstyles.main_smallAbout_carousel}>
          <ImageCarousel />
        </div>
        <div className={Mainstyles.main_smallAbout_container}>
          <div className={Mainstyles.main_smallAbout_container_car}>
            <motion.div
              className={Mainstyles.main_smallAbout_container_car_wheel_left}
              variants={variants}
              animate="turnWheels"
            ></motion.div>
            <motion.div
              className={Mainstyles.main_smallAbout_container_car_wheel_right}
              variants={variants}
              animate="turnWheels"
            ></motion.div>
          </div>
        </div>
      </section>

      <section className={Mainstyles.main_smallHead}>
        <div>
          <div className={Mainstyles.main_smallHead_container}>
            <div className={Mainstyles.main_smallHead_container_header}>
              <div>
                <IoMdThumbsUp style={{ transform: "translateY(-2px)" }} />
              </div>
              <h1>{t("h1")}</h1>
            </div>
            <p>{t("p1")}</p>
          </div>

          <div className={Mainstyles.main_smallHead_container}>
            <div className={Mainstyles.main_smallHead_container_header}>
              <div>
                <FaTruck />
              </div>
              <h1>{t("h2")}</h1>
            </div>
            <p>{t("p2")}</p>
          </div>
        </div>

        <div>
          <div className={Mainstyles.main_smallHead_container}>
            <div className={Mainstyles.main_smallHead_container_header}>
              <div>
                <MdEmail />
              </div>
              <h1>{t("h3")}</h1>
            </div>
            <p>{t("p3")}</p>
          </div>

          <div className={Mainstyles.main_smallHead_container}>
            <div className={Mainstyles.main_smallHead_container_header}>
              <div>
                <FaUserAlt />
              </div>
              <h1>{t("h4")}</h1>
            </div>
            <p>{t("p4")}</p>
          </div>
        </div>
      </section>
      <section className={Mainstyles.main_services}>
        <div className={Mainstyles.main_services_image}></div>
        <div className={Mainstyles.main_services_info}>
          <h1>{t("info.h1")}</h1>
          <h2>{t("info.h2")}</h2>
          <p>{t("info.p")}</p>
          <li>
            <FaCheck />
            {t("info.l1")}
          </li>
          <li>
            <FaCheck />
            {t("info.l2")}
          </li>
          <li>
            <FaCheck />
            {t("info.l3")}
          </li>
          <li>
            <FaCheck />
            {t("info.l4")}
          </li>
          <Link
            href={`${i18n.language}/services`}
            target="_self"
            className={`${Buttonstyles.button} ${Mainstyles.main_services_info_button}`}
          >
            {t("info.button")}
          </Link>
        </div>

        <div className={Mainstyles.main_services_reviews}>
          <div className={Mainstyles.main_services_reviews_header}>
            <h1>{t("reviews.h1")}</h1>
            <h2>{t("reviews.h2")}</h2>
          </div>

          <div className={Mainstyles.main_services_reviews_slider}>
            <IoMdQuote />
            {Slider(reviews)}
            {/* <div style={{display: 'flex',justifyContent: 'flex-end',}}>
                        <IoMdQuote />
                    </div> */}
          </div>

          <div className={Mainstyles.main_services_stars_container}>
            <div>
              <Image src={starSVG} width={50} height={50} alt="star" />
              <Image src={starSVG} width={50} height={50} alt="star" />
              <Image src={starSVG} width={50} height={50} alt="star" />
              <Image src={starSVG} width={50} height={50} alt="star" />
              <Image src={starSVG} width={50} height={50} alt="star" />
            </div>
            <span>{t("reviews.span")}</span>
          </div>
        </div>
      </section>

      <QuoteHead />

      <div className={Mainstyles.main_contact}>
        <div className={Mainstyles.main_contact_info}>
          <h1>{t("contact.h1")}</h1>
          <h1>{t("contact.h2")}:&nbsp;606&nbsp;925&nbsp;796</h1>
          <p>
            {t("contact.p")}
            <br></br>
            {t("contact.p2")}
          </p>
          <Link
            href={`${i18n.language}/contacts`}
            target="_self"
            className={Buttonstyles.button}
          >
            {t("contact.div")} &emsp;&ensp;➤
          </Link>
        </div>
        <div className={Mainstyles.main_contact_social}>
          <Link
            target="_blank"
            href="https://facebook.com/profile.php?id=100064602049751"
          >
            <div>
              <FaFacebookF className="social_icon" />
            </div>
          </Link>
          <div>
            <FaTwitter className="social_icon" />
          </div>
          <div>
            <FaInstagram className="social_icon" />
          </div>
          <div>
            <FaGoogle className="social_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
