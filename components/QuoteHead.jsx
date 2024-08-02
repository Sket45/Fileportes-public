import React from "react";
import Quoteheadstyles from "../styles/QuoteHead.module.scss";
import Buttonstyles from "../styles/Button.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { MdOutlineThumbUp } from "react-icons/md";

const QuoteHead = () => {
  const { t } = useTranslation("common", { keyPrefix: "quoteHead" });

  return (
    <section className={Quoteheadstyles.container_imageHead}>
      <p className={Quoteheadstyles.container_quoteText}>{t("p1")}</p>
      <div className={Quoteheadstyles.container_quoteBox}>
        <div className={Quoteheadstyles.container_quoteBox_header}>
          <div>
            <MdOutlineThumbUp />
          </div>
          <h1>
            {t("h1")}
            <br></br>
            {t("h2")}
          </h1>
        </div>
        <p>{t("p")}</p>
        <Link href="/rates" className={Buttonstyles.button}>
          {t("div")}
        </Link>
      </div>
    </section>
  );
};

export default QuoteHead;
