import React from 'react';
import Servicesstyles from '../styles/Services.module.scss';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import ServicesList from '../data/services';


const Services = () => {

  const { t } = useTranslation('common', { keyPrefix: 'services'});

  const services = ServicesList();

  const addServices = () => {

  
    return Object.keys(services).map((service) => (
     <>
      {/* {console.log(`service: ${services[service].replace(/\s/g, '')}`)} */}
      <Link
      key={service}
      className={Servicesstyles.container_wrapper_services_card}
      href={{
       pathname:'/rates',
       query: { service: service},
      }}
      >
         <div
          key={`div${service}`}
          id={Servicesstyles[service]}></div>
         <h1 key={`h1${service}`}>{t(`h${service}`)}</h1>
         <p key={`p${service}`}>{t(`p${service}`)}</p>
      </Link>
      </>
    ))
  
    
  }

  return (
    <div  className={Servicesstyles.container}>

        <div className={Servicesstyles.container_wrapper}>
          <div className={Servicesstyles.container_wrapper_header}>
            <h1>
                {t('header.h1')}
              </h1>
              <h2>
                {t('header.h2')}
              </h2>
              <p>
                {t('header.p')}
              </p>
          </div>

          <section className={Servicesstyles.container_wrapper_services}>

            {addServices()}
         
          </section>

        </div>

    </div>
  )
}

export default Services