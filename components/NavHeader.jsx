import React from 'react'
import Navheaderstyles from '../styles/NavHeader.module.scss'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';


const NavHeader = () => {
    
const { t } =  useTranslation('common', { keyPrefix: 'navHeader'});

const pageHeaders = {
    services: {
        h1: t('services.h1'),
        h2: t('services.h2')
    },
    rates: {
        h1: t('rates.h1'),
        h2: t('rates.h2')
    },
    contacts: {
        h1: t('contacts.h1'),
        h2: t('contacts.h2')
    },
}

    const { asPath } = useRouter();


  return (
    <div className={Navheaderstyles.container}>
        <div>
            <h1>
                {pageHeaders[asPath.split('?')[0].slice(1)].h1}
            </h1>
            <h2>
            {pageHeaders[asPath.split('?')[0].slice(1)].h2}
            </h2>
        </div>

    </div>
  )
}

export default NavHeader