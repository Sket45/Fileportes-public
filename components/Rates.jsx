import React from "react";
import Ratestyles from "../styles/Rates.module.scss";
import ContactformStyles from "../styles/ContactForm.module.scss";
import { useTranslation } from "next-i18next";

function Rates() {
  const { t } = useTranslation("common", { keyPrefix: "rates" });

  return (
    <div className={Ratestyles.container}>
      <div>
        <h1>{t("h1")}</h1>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <div className={Ratestyles.container_table}>
          <table>
            <tbody>
              <tr>
                <th>{t("th2")}</th>
                <th>{t("th1")}</th>
                <th>{t("th3")}</th>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>40€</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>55€</td>
              </tr>
              <tr>
                <td>1</td>
                <td>3</td>
                <td>70€</td>
              </tr>
            </tbody>
          </table>
          <div className={Ratestyles.container_tax}>{t("tax")}</div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
