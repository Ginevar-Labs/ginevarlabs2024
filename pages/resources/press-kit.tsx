import ContactBox from '@/components/ContactBox';
import EngineeringBlogBox from '@/components/EngineeringBlogBox';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeHero from '@/components/HomeHero';
import HomeMessageBox from '@/components/HomeMessageBox';
import ServiceOfferingBox from '@/components/ServiceOfferingBox';
import TrustedByBox from '@/components/TrustedByBox';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='resources' locale={locale} />
      <main
        className={`flex min-h-screen flex-col px-10 py-10 bg-[#1F1D1D] fontedBebas `}
      >
        <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
            {t('resources_press_kit_media_kit', {ns: 'common'})}
        </h1>
        <br/>
        <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4'>{t('resources_press_kit_light_banner_and_logo', {ns: 'common'})}</p>
        <div className='grid lg:grid-cols-4 grid-cols-2'>
            <div className='col-span-2 relative'>
            <img className='h-40 mx-4 mt-10 object-contain' src='/assets/ginevar_banner_light.png' alt={t('resources_press_kit_light_banner', {ns: 'common'})}/>
            <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_light_banner', {ns: 'common'})}</p>
            </div>
            <div className='col-span-2 relative'>
            <img className='h-40 w-20 mt-10 mx-4 object-contain' src='/assets/ginevar_logo_light.png' alt={t('resources_press_kit_light_logo', {ns: 'common'})}/>
            <p className='absolute w-full top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_light_logo', {ns: 'common'})}</p>
            </div>
        </div>

        <br/>
        <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4 mt-20'>{t('resources_press_kit_dark_banner_and_logo', {ns: 'common'})}</p>
        <div className='grid lg:grid-cols-4 grid-cols-2'>
            <div className='col-span-2 relative'>
            <img className='h-40 mx-4 mt-10 object-contain' src='/assets/ginevar_banner_dark.png' alt={t('resources_press_kit_dark_banner', {ns: 'common'})}/>
            <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_dark_banner', {ns: 'common'})}</p>
            </div>
            <div className='col-span-2 relative'>
            <img className='h-40 w-20 mt-10 mx-4 object-contain' src='/assets/ginevar_logo_dark.png' alt={t('resources_press_kit_dark_logo', {ns: 'common'})}/>
            <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_dark_logo', {ns: 'common'})}</p>
            </div>
        </div>
        
      </main>
      <Footer currentPage='resources' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale: locale
    },
  };
};