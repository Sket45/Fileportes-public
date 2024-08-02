import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import TCStyles from "../styles/TC.module.scss";

export default function TC() {
  const { t } = useTranslation("common", { keyPrefix: "TC" });
  return (
    <div className={TCStyles.container}>
      <div className={TCStyles.container_wrapper}>
        <h1>{t("h1")}</h1>
        <p>{t("p")}</p>
      </div>
      <h2>
        <Link href="javascript:window.close()">{t("h2btn")}</Link>
      </h2>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
