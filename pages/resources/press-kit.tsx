import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import {motion} from 'framer-motion'

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='resources' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <motion.div initial={{height:0}}  animate={{ height: "revert-layer" }}  transition={{ type: "spring", bounce: 0.25 }} className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-3.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_resources_press_kit', { ns: 'common'})}
            </p>
        </motion.div>
        <div className='lg:px-20 px-10 py-10'>
            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                {t('resources_press_kit_media_kit', {ns: 'common'})}
            </h1>
            <br/>
            <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4'>
            {t('resources_press_kit_who_we_are', { ns: 'common'})}
            </p>
            <p className='fontedBebas text-white lg:text-[22px] text-[16px] my-2 opacity-75'>
            {t('resources_press_kit_who_we_are_text', { ns: 'common'})}
            </p>
            <br/>
            <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4'>
            {t('resources_press_kit_what_we_do', { ns: 'common'})}
            </p>
            <p className='fontedBebas text-white lg:text-[22px] text-[16px] my-2 opacity-75'>
            {t('resources_press_kit_what_we_do_text', { ns: 'common'})}
            </p>
            <br/>
            <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4'>
            {t('resources_press_kit_how_to_reach_us', { ns: 'common'})}
            </p>
            <p className='fontedBebas text-white lg:text-[22px] text-[16px] my-2 opacity-75'>
            {t('resources_press_kit_how_to_reach_us_text', { ns: 'common'})}
            </p>
            <br/>
            <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4'>{t('resources_press_kit_light_banner_and_logo', {ns: 'common'})}</p>
            <div className='grid lg:grid-cols-4 grid-cols-2'>
                <div className='col-span-2 relative'>
                <img className='lg:h-40 h-20 mx-4 mt-10 object-contain' src='/assets/ginevar_banner_light.png' alt={t('resources_press_kit_light_banner', {ns: 'common'})}/>
                <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_light_banner', {ns: 'common'})}</p>
                </div>
                <div className='col-span-2 relative mt-4'>
                <img className='lg:h-40 h-20 w-20 mt-10 mx-4 object-contain' src='/assets/ginevar_logo_light.png' alt={t('resources_press_kit_light_logo', {ns: 'common'})}/>
                <p className='absolute w-full top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_light_logo', {ns: 'common'})}</p>
                </div>
            </div>

            <br/>
            <p className='fontedBebas text-white lg:text-[36px] text-[26px] my-4 mt-20'>{t('resources_press_kit_dark_banner_and_logo', {ns: 'common'})}</p>
            <div className='grid lg:grid-cols-4 grid-cols-2'>
                <div className='col-span-2 relative'>
                <img className='lg:h-40 h-20 mx-4 mt-10 object-contain' src='/assets/ginevar_banner_dark.png' alt={t('resources_press_kit_dark_banner', {ns: 'common'})}/>
                <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_dark_banner', {ns: 'common'})}</p>
                </div>
                <div className='col-span-2 relative mt-4'>
                <img className='lg:h-40 h-20 w-20 mt-10 mx-4 object-contain' src='/assets/ginevar_logo_dark.png' alt={t('resources_press_kit_dark_logo', {ns: 'common'})}/>
                <p className='absolute top-0 text-white text-left ml-4 opacity-50 fontedBebas'>{t('resources_press_kit_dark_logo', {ns: 'common'})}</p>
                </div>
            </div>
        </div>
        
      </main>
      <Footer currentPage='resources' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" async></script>
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