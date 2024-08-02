import languageDetector from '../lib/languageDetector';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Buttonstyles from  '../styles/Button.module.scss'

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()



  let href = rest.href || router.asPath
  // console.log(href)
  let pName = router.pathname
  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }
  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`
  }
  return (
    <Link href={href} locale={locale}>
      <button
        className={Buttonstyles.button}
        style={{ fontSize: 'small' }}
        onClick={() => languageDetector.cache(locale)}
      >
        {locale}
      </button>
    </Link>
  )
}

export default LanguageSwitchLink