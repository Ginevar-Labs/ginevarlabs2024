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
      <Header currentPage='home' locale={locale} />
      <main
        className={`flex min-h-screen flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <div className='relative w-full lg:h-[460px] h-[220px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-1.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <div className='relative grid grid-cols-3 lg:mx-10 mx-2 w-full h-full'>
              <div className='relative col-span-1 flex content-start justify-start items-top lg:my-10 my-2'>
                <p className='relative text-left text-white lg:text-[56px] text-[24px] leading-none'>
                  Crafting <br/> Digital <br/> Excellence
              </p>
              </div>
              <div className='relative w-full col-span-1 flex content-center justify-center items-center'>
                <img src='/assets/ginevar_logo_dark.png' alt='Ginevar dark logo' className='lg:w-[150px] w-[100px] object-fit' />
              </div>
              <div className='relative col-span-1 flex content-end justify-end items-end lg:my-10 my-2'>
                <p className='relative text-right text-white lg:text-[56px] text-[24px leading-none'>
                  In the palm <br/>of your hand
              </p>
              </div>
            </div>
        </div>

      </main>
      <Footer currentPage='home' locale={locale}/>
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