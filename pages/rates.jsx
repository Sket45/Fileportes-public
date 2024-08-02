import Head from "next/head";
import React from "react";
import Rates from "../components/Rates";
import ContactForm from "../components/Contactform";
import NavHeader from "../components/NavHeader";
import QuoteHead from "../components/QuoteHead";
import Services from "../data/services";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function rates() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const metaTags = {
    es: {
      title: "Tarifas de Mudanza en España | FilePortes",
      description:
        "Consulte las tarifas de mudanza de FilePortes. Ofrecemos precios competitivos para mudanzas de hogar y oficina en toda España.",
      keywords:
        "tarifas de mudanza, precios de mudanza, mudanzas económicas, presupuestos de mudanza, empresa de mudanzas España",
    },
    esCT: {
      title: "Tarifes de Mudança a Espanya | FilePortes",
      description:
        "Consulteu les tarifes de mudança de FilePortes. Oferim preus competitius per a mudances de llar i oficina a tot Espanya.",
      keywords:
        "tarifes de mudança, preus de mudança, mudances econòmiques, pressupostos de mudança, empresa de mudances Espanya",
    },
    gb: {
      title: "Moving Rates in Spain | FilePortes",
      description:
        "Check out FilePortes' moving rates. We offer competitive prices for home and office relocations across Spain.",
      keywords:
        "moving rates, moving prices, affordable movers, moving quotes, moving company Spain",
    },
  };

  const currentMeta = metaTags[currentLanguage] || metaTags.es;

  return (
    <>
      <Head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta name="author" content="FilePortes" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="../public/images/Logo_Van_sky.png" />
        <meta property="og:url" content="https://www.fileportes.com/rates" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta
          name="twitter:image"
          content="../public/images/Logo_Van_sky.png"
        />
        <meta name="language" content={currentLanguage} />
        <link
          rel="alternate"
          href="https://www.fileportes.com/rates"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/gb/rates"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/esCT/rates"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/rates"
          hrefLang="x-default"
        />
      </Head>

      <NavHeader />
      <Rates />
      <ContactForm services={Services} pageStyle={"Rates"} />
      <QuoteHead />
    </>
  );
}

export default rates;

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
