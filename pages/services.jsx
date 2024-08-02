import Head from "next/head";
import React from "react";
import NavHeader from "../components/NavHeader";
import Aboutus from "../components/Aboutus";
import QuoteHead from "../components/QuoteHead";
import Services from "../components/Services";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function services() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const metaTags = {
    es: {
      title: "Servicios de Mudanza Profesional en España | FilePortes",
      description:
        "Descubra los servicios de mudanza de FilePortes en España, ofreciendo mudanzas de hogar y oficina seguras y económicas. ¡Obtenga una cotización hoy!",
      keywords:
        "servicios de mudanza, mudanzas de hogar, mudanzas de oficina, empresa de mudanzas España, mudanzas profesionales",
    },
    esCT: {
      title: "Serveis de Mudança Professional a Espanya | FilePortes",
      description:
        "Descobreixi els serveis de mudança de FilePortes a Espanya, oferint mudances de llar i oficina segures i econòmiques. Obtingui un pressupost avui!",
      keywords:
        "serveis de mudança, mudances de llar, mudances d'oficina, empresa de mudances Espanya, mudances professionals",
    },
    gb: {
      title: "Professional Moving Services in Spain | FilePortes",
      description:
        "Discover FilePortes' moving services in Spain, offering secure and affordable home and office relocations. Get a quote today!",
      keywords:
        "moving services, home relocation, office movers, moving company Spain, professional movers",
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
        <meta property="og:url" content="https://www.fileportes.com/services" />
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
          href="https://www.fileportes.com/services"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/gb/services"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/esCT/services"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/services"
          hrefLang="x-default"
        />
      </Head>

      <NavHeader />
      <Aboutus />
      <Services />
      <QuoteHead />
    </>
  );
}

export default services;

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
