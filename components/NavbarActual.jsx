import React, { useState } from 'react';
import Link from 'next/link';

import Navstyles from '../styles/Nav.module.scss';
import DropDownstyles from '../styles/DropDown.module.scss';

import { withRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { CircleFlag } from 'react-circle-flags'

import i18nconfig from '../next-i18next.config.js'

import { RiArrowDropDownLine } from "react-icons/ri";

const NavbarActual = ({ router }) => {

  const { t, i18n } = useTranslation('common');
  

  const isActive = (page) => {

    return router.pathname === page ? Navstyles.active : '';
  };

      

  const { pathname, query, asPath } = router;
  const changeLanguage = (lngg) => {
      router.push({ pathname, query }, asPath, { locale: lngg });
      // console.log('click')
      i18n.changeLanguage(lngg);

  }
  const isCurrentLocale = (locale) => i18n.language === locale;

  const nativeName = {
    gb: t('language.gb'),
    es: t('language.es'),
    esCT: t('language.esCT')
}

  const [toggled, setToggled] = useState(false)

  const toggleClass = () => {
    setToggled(!toggled)

  }


  return (
    <>
   
      <div className={Navstyles.container}></div>

      <div className={Navstyles.navbar_bot}>
          <div className={Navstyles.navbar_bot_wrapper}>

            <span className={DropDownstyles.container}>

              <div className={DropDownstyles.container_wrapper}>
                <div className={DropDownstyles.container_wrapper_initial}>
                  {/* {console.log(i18n.language)} */}
                  <CircleFlag countryCode={i18n.language == `esCT` ? `es-ct` : i18n.language} height="27" />
                  <div>
                    {nativeName[i18n.language]}
                    <RiArrowDropDownLine />
                  </div>

                </div>


                <span className={DropDownstyles.container_wrapper_hidden}>
                  <div className={DropDownstyles.container_wrapper_hidden_wrapper}>
                  {router.locales.map((lng) => !isCurrentLocale(lng)  && (
                    <div
                        key={lng}
                        id={isCurrentLocale(lng) ? Navstyles[`${lng}`] : ''}
                    >
                      <button      
                          onClick={() => changeLanguage(lng)}
                          >
                            <div>
                              <CircleFlag countryCode={lng == `esCT` ? `es-ct` : lng} height="27" />
                              {nativeName[lng]}
                            </div>
                      </button>
                    </div>
                  ))}
                  </div>  
                </span>  
              </div>

  
            </span>


              <div className={Navstyles.navbar_bot_wrapper_links}>
                <Link href="/" className={isActive('/')}>{t('navBarLinks.l1')}</Link>
                <Link href="/services" className={isActive('/services')}>{t('navBarLinks.l2')}</Link>
                <Link href="/rates" className={isActive('/rates')}>{t('navBarLinks.l3')}</Link>
                <Link href="/contacts" className={isActive('/contacts')}>{t('navBarLinks.l4')}</Link>
              {/* <Link href="/login">Login</Link> */}
              </div>

              <div 
           
              className={Navstyles.navbar_bot_wrapper_smallLinks}
              >
                  <ul 
                    onClick={toggleClass}
                    className={`${Navstyles.navbar_bot_wrapper_smallLinks_burger} ${toggled ? Navstyles.toggled_burger : null}`}
                    >
                     <li></li>
                     <li></li>
                  </ul>
              </div>
          </div>
            <ul 
            style={toggled ? null : {display: 'none'}}
            className={`${Navstyles.navbar_bot_wrapper_smallLinks_modal} ${toggled ? Navstyles.toggled_modal : null}`}>
              <li>
                <Link href="/" onClick={toggleClass}>{t('navBarLinks.l1')}</Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleClass}>{t('navBarLinks.l2')}</Link>
              </li>
              <li>
                <Link href="/rates" onClick={toggleClass}>{t('navBarLinks.l3')}</Link>
              </li>
              <li>
                  <Link href="/contacts" onClick={toggleClass}>{t('navBarLinks.l4')}</Link>
              </li>
            </ul>
      </div>

    </>
  )



}

export default withRouter(NavbarActual);