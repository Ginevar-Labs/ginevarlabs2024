
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PortItem from '@/components/portItem';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import {motion } from 'framer-motion'

export default function Home({ portfolioItems, locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='services' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <motion.div initial={{height:0}}  animate={{ height: "revert-layer" }}  transition={{ type: "spring", bounce: 0.25 }}  className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-2.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_services_portfolio', { ns: 'common'})}
            </p>
        </motion.div>
        <div className='lg:px-20 px-10 py-10'>
            {
                portfolioItems.items.sort((a: any, b: any) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item:any, index:any) => 
                <PortItem key={index} item={item} index={index} /> )
            }
        </div>
        
      </main>
      <Footer currentPage='services' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" async></script>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale, req } = context;


  const _portfolioItems = await fetch(`http://${req.headers.host}/api/portfolio`)
  const _portfolioItemsData = await _portfolioItems.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      portfolioItems: _portfolioItemsData,
      locale: locale
    },
  };
};