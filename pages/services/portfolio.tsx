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
import Link from 'next/link';
import Button from '@/components/Button';

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <div className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-2.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_services_portfolio', { ns: 'common'})}
            </p>
        </div>
        <div className='lg:px-20 px-10 py-10'>
            {
                [
                    {
                        client: 'The Highlights App',
                        slogan: t('portfolio_highlights_slogan', { ns: 'common'}),
                        desc: t('portfolio_highlights_desc', { ns: 'common'}),
                        img: '/assets/screens/HIGHLI.png'
                    },
                    {
                        client: 'J. Joshua',
                        slogan: t('deliverly_highlights_slogan', { ns: 'common'}),
                        desc: t('deliverly_highlights_desc', { ns: 'common'}),
                        img: '/assets/screens/DELIVER.png'
                    }
                ].map((item, index) => <div key={index} className='my-10 transition-all duration-500 relative group border-dashed border-white hover:border-[#FAFF00] lg:border-b-[2px] w-[80%] mx-[10%] lg:h-[300px] transition duration-500 opacity-100'>
                <div className='lg:absolute block lg:hidden lg:bottom-0 lg:left-20 border-dashed border-white border-b-[2px]'>
                        <img className='w-full h-[200px] object-cover' src={item.img} alt={t('portfolio_highlights_slogan', { ns: 'common'})}  />
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2'>
                        <div className='lg:col-span-2 col-span-0'></div>
                        <div className='col-span-2 lg:h-[300px] flex justify-left items-center text-white text-left lg:px-10'>
                            <div>
                            <p className='text-[20px] opacity-50'>{item.client}</p>
                            <h2 className='text-[36px]'>{item.slogan}</h2>
                            <p className='text-[16px]'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:absolute lg:block hidden lg:bottom-0 lg:left-20'>
                        <img className='w-full h-[300px] object-contain' src={item.img} alt={t('portfolio_highlights_slogan', { ns: 'common'})} />
                    </div>
                </div> )
            }
        </div>
        
      </main>
      <Footer currentPage='services' locale={locale}/>
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