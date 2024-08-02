
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import errorStyles from '../styles/Error.module.scss'



export default function Error() {

  const { t } = useTranslation('common', {keyPrefix: 'error'})
    return (

      <div className={errorStyles.container}> 
        <div className={errorStyles.container_wrapper}>
          <h1>
            {t('h1')}
          </h1>
            <div>
              404
            </div>

            <h2>
            {t('h2')}&nbsp;
              <Link href='/'>{t('h2btn')}</Link>
            </h2>
        </div>
      </div>
    )
}


export async function getStaticProps({ locale }) {
  console.log(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  } 
}
