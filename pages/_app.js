import { Suspense } from 'react';
import Layout from '../components/Layout'
import '../styles/global.css'
import { appWithTranslation } from  'next-i18next';
import i18n from '../next-i18next.config';


function MyApp( {Component, pageProps}) {
    return (
        

        <Suspense fallback="Loading...">

       
            <Layout>
                <Component {...pageProps}/>
            </Layout>

        </Suspense>
   
    ) 
}


export default appWithTranslation(MyApp, i18n)


