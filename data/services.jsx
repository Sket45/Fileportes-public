import { useTranslation } from 'next-i18next';


const Services = () => {

    const  { t } = useTranslation('common', { keyPrefix: 'services'})

    const services = {

    "lMovers": t('lMovers'),
    "ldMovers": t('ldMovers') ,
    "oMovers": t('oMovers'),
    "lPlatform": t('lPlatform'),
    "Packing": t('Packing'),
    "Storage": t('Storage'),
    "Cleaning": t('Cleaning'),
    "Recycling": t('Recycling'),
    "Budget": t('Budget')

    }
    return services
}




export default Services;

