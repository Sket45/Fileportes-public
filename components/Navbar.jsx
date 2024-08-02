import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';



import Navstyles from '../styles/Nav.module.scss';
import Buttonstyles from '../styles/Button.module.scss';

import phoneSVG from '../public/images/svg/phone.svg';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CircleFlag } from 'react-circle-flags'

const Navbar =  () => {


    const { t, i18n } = useTranslation('common', { keyPrefix: 'navBar'}); 
    
    const router = useRouter()
    const { pathname, query, asPath } = router;
    const changeLanguage = (lngg) => {
        router.push({ pathname, query }, asPath, { locale: lngg });
        // console.log('click')
        i18n.changeLanguage(lngg);

    }

    


    const isCurrentLocale = (locale) => i18n.language === locale;


            return(
          
                
                <div className={Navstyles.navbar}>
                    <div className={Navstyles.navbar_top}>
                        <Link href='/contacts'><span>Info@fileportes.com</span></Link>

                        <div className={Navstyles.navbar_socials}>
                            <div>{t('div')}</div>
                            <Link target='_blank' href='https://facebook.com/profile.php?id=100064602049751'><FaFacebookF/></Link>
                            {/* <div><FaInstagram/></div> */}

                        </div>
                    </div>
                    <div className={Navstyles.navbar_mid}>
                        <div className={Navstyles.logo}>
                           
                        </div>
                        <div className={Navstyles.navbar_contact}>
                            <div className={Navstyles.contact_details}>
                                <Image
                                    src={phoneSVG}
                                    alt='phone'
                                />
                               

                                
                                <div>{t('office')}:<br></br> 606 925 796</div>
                              
                            </div>
                            <div className={Buttonstyles.button}>
                                <Link href="/contacts">{t('button')}</Link>
                                
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                
                    
         
            )
            
        
}

export default Navbar;

