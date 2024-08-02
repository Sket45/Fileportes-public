import React from 'react';
import AboutUsstyles from '../styles/Aboutus.module.scss';

import { useTranslation } from 'next-i18next';

 

const Aboutus = () => {

    const { t } = useTranslation('common', { keyPrefix: 'aboutUs'});

  return (
    <div className={AboutUsstyles.container}>

        <section className={AboutUsstyles.container_wrapper}>
            <div className={AboutUsstyles.container_wrapper_image}>

            </div>
            <div className={AboutUsstyles.container_wrapper_about}>
                <h1>
                    {t('h1')}
                </h1>
                <h2 >
                     {t('h2')}   
                </h2>
                <p>
                     {t('p1')}
                </p>
                <p>
                     {t('p2')}
                </p>
                
            </div>

        </section>
        

  </div>
  )
}

export default Aboutus;