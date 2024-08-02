import Head from "next/head";
import React from "react";
import ContactForm from "../components/Contactform";
import NavHeader from "../components/NavHeader";
import QuoteHead from "../components/QuoteHead";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function rates() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const metaTags = {
    es: {
      title: "Contacte con Nosotros | FilePortes",
      description:
        "Póngase en contacto con FilePortes para todas sus necesidades de mudanza en España. Servicios profesionales y atención al cliente excepcional.",
      keywords:
        "contacto, servicios de mudanza, empresa de mudanzas, mudanzas España, atención al cliente",
    },
    esCT: {
      title: "Contacti amb Nosaltres | FilePortes",
      description:
        "Poseu-vos en contacte amb FilePortes per a totes les vostres necessitats de mudança a Espanya. Serveis professionals i atenció al client excepcional.",
      keywords:
        "contacte, serveis de mudança, empresa de mudances, mudances Espanya, atenció al client",
    },
    gb: {
      title: "Contact Us | FilePortes",
      description:
        "Get in touch with FilePortes for all your moving needs in Spain. Professional services and exceptional customer support.",
      keywords:
        "Contact moving company, Moving services, FilePortes contact information, Movers in Spain, contact, moving services, moving company, relocations Spain, customer support",
    },
  };

  const currentMeta = metaTags[currentLanguage] || metaTags.es;

  return (
    <main>
      <Head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta name="author" content="FilePortes" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="../public/images/Logo_Van_sky.png" />
        <meta property="og:url" content="https://www.fileportes.com/contacts" />
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
          href="https://www.fileportes.com/contacts"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/gb/contacts"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/esCT/contacts"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/contacts"
          hrefLang="x-default"
        />
      </Head>

      <NavHeader />
      <ContactForm pageStyle={"Contacts"} />
      <QuoteHead />
    </main>
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
