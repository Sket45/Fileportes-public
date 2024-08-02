import Head from "next/head";
import Main from "../components/Main.jsx";
import Header from "../components/Header.jsx";
import { Suspense } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const metaTags = {
    es: {
      title: "Empresa de Mudanzas Profesional en España | FilePortes",
      description:
        "FilePortes ofrece servicios de mudanza de hogar y oficina en toda España. Obtenga servicios de mudanza confiables y asequibles adaptados a sus necesidades.",
      keywords:
        "Empresa de mudanzas España, Servicios de mudanza, Mudanzas de oficina, Mejores servicios de mudanza, Expertos en mudanza, Mudanzas de muebles, Mudanzas locales en España, Mudanzas profesionales, Presupuestos de mudanza España, Mudanzas económicas España",
    },
    esCT: {
      title: "Empresa de Mudances Professional a Espanya | FilePortes",
      description:
        "FilePortes ofereix serveis de mudança de llar i oficina a tota Espanya. Obtingui serveis de mudança fiables i assequibles adaptats a les seves necessitats.",
      keywords:
        "Empresa de mudances Espanya, Serveis de mudança, Mudances d'oficina, Millors serveis de mudança, Experts en mudança, Mudances de mobles, Mudances locals a Espanya, Mudances professionals, Pressupostos de mudança Espanya, Mudances econòmiques Espanya",
    },
    gb: {
      title: "Professional Moving Company in Spain | FilePortes",
      description:
        "FilePortes offers expert home and office relocation services across Spain. Get reliable and affordable moving services tailored to your needs.",
      keywords:
        "Moving company Spain, House relocation services, Office movers Spain, Best moving services, Relocation experts, Furniture movers, Local movers in Spain, Professional movers, Spain moving quotes, Affordable movers Spain",
    },
  };

  const currentMeta = metaTags[currentLanguage] || metaTags.es;

  return (
    <div>
      <Head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta name="author" content="FilePortes" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="../public/images/Logo_Van_sky.png" />
        <meta property="og:url" content="https://www.fileportes.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta
          name="twitter:image"
          content="../public/images/Logo_Van_sky.png"
        />
        <meta name="language" content={currentLanguage} />
        <link rel="alternate" href="https://www.fileportes.com" hrefLang="es" />
        <link
          rel="alternate"
          href="https://www.fileportes.com/gb"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com/esCT"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://www.fileportes.com"
          hrefLang="x-default"
        />
      </Head>

      <Suspense fallback="Loading...">
        <Header />
      </Suspense>
      <Main />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // console.log(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "reviews"])),
    },
  };
}
