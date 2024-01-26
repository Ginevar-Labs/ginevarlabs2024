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
      <Header currentPage='company' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <div className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-5.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_company_about_us', { ns: 'common'})}
            </p>
        </div>
        <div className='lg:px-20 px-10 py-10'>
            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                {t('about_our_history', { ns: 'common'})}
            </h1>
            <div className='grid lg:grid-cols-5 grid-cols-1'>
                <div className='lg:col-span-1 col-span-0'>
                    <img className='lg:w-[150px] w-[50px] lg:mx-4 mx-auto' src='/assets/ginevar_logo_light.png' alt='Ginevar'/>
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <p className='text-white text-justify lg:text-[22px] text-[16px] opacity-75'>
                        {t('about_our_history_text_a', { ns: 'common'})}
                    </p>
                </div>
            </div>
            <p className='text-white text-justify mt-4 mb-8 lg:text-[22px] text-[16px] opacity-75'>
                {t('about_our_history_text_b', { ns: 'common'})}
            </p>
            <p className='text-white text-justify lg:text-[22px] text-[16px] opacity-75'>
                {t('about_our_history_text_c', { ns: 'common'})}
            </p>
            <br/>
            <p className='text-white text-left lg:text-[22px] text-[16px]'>
                {t('about_our_history_lets_build', { ns: 'common'})}
            </p>
            <br/>
            <p className='text-white text-left lg:text-[22px] text-[16px]'>
            <Link href='/get-in-touch' className='transition duration-500 underline decoration-4 decoration-[#403D0E] hover:decoration-[#FAFF00]' locale={locale}>{t('about_our_history_connect_link', { ns: 'common'})}</Link>{t('about_our_history_connect_text', { ns: 'common'})}
            </p>

            <div className='w-full mt-10 grid lg:grid-cols-6 grid-cols-2 w-full lg:px-40 px-0 fontedBebas my-0'>
                <div className='col-span-2 text-justify lg:px-10 text-white'>
                    <div className='lg:m-0 m-10 mt-0 mb-2 border-dashed border-[1px] border-white aspect-square'>

                    </div>
                    <p className=' text-center lg:text-[22px] text-[16px]'>Nicolas Curti</p>
                    <p className=' text-center lg:text-[22px] text-[16px]'>{t('about_position_nico', { ns: 'common'})}</p>
                    <div className='w-full flex w-full lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link target='_blank' href="https://www.linkedin.com/in/ncurti/" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-white font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    {/* <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link target='_blank' href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul> */}
                    </div>
                </div>
                <div className='col-span-2 text-justify lg:px-10 text-white'>
                    <div className='lg:m-0 m-10 mt-0 mb-2 border-dashed border-[1px] border-white aspect-square'>

                    </div>
                    <p className=' text-center lg:text-[22px] text-[16px]'>Juan Manuel Curti</p>
                    <p className=' text-center lg:text-[22px] text-[16px]'>{t('about_position_juan', { ns: 'common'})}</p>
                    <div className='flex lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link target='_blank' href="https://www.linkedin.com/in/jmcur/" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-white font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link target='_blank' href="https://juancurti.medium.com/" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-white font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link target='_blank' href="https://github.com/juancurti" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-white font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                    </div>
                </div>
                <div className='col-span-2 text-justify lg:px-10 text-white'>
                    <div className='lg:m-0 m-10 mt-0 mb-2 border-dashed border-[1px] border-white aspect-square'>

                    </div>
                    <p className=' text-center lg:text-[22px] text-[16px]'>Lavinia Poggi</p>
                    <p className=' text-center lg:text-[22px] text-[16px]'>{t('about_position_lavi', { ns: 'common'})}</p>
                    <div className='flex lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.linkedin.com/in/lavinia-poggi-a67200176/" target='_blank' className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-white font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                    </div>
                </div>
            </div>


            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                Our Clients
            </h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full my-4'>
                <div className='col-span-1  flex justify-center items-center'>
                    <p className='text-white text-justify lg:text-[22px] text-[16px] opacity-75'>
                    {t('about_our_clients_text_a', { ns: 'common'})}
                    </p>
                </div>
                <div className='col-span-1 lg:pl-40 lg:pr-20 flex justify-end items-end'>
                    <img src='/assets/map.png' className='w-full opacity-75 object-cover lg:my-0 my-4' alt={t('about_our_clients_map_alt', { ns: 'common'})}/>
                </div>
            </div>
            <p className='text-white text-justify lg:text-[22px] text-[16px] opacity-75'>
            {t('about_our_clients_text_b', { ns: 'common'})}
            </p>
            <div className='mt-20 relative w-full text-center fontedBebas h-[300px] flex content-center items-center justify-center my-10'>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute top-0 left-0 lg:left-20 border-t-[3px] border-l-[3px] border-dashed border-white'/>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute bottom-0 right-0 lg:right-20 border-b-[3px] border-r-[3px] border-dashed border-white'/>
                    <div className='w-[200px]'>
                        <Link href='/get-in-touch' locale={locale}>
                            <Button light={true} title={t('main_menu_item_get_in_touch', { ns: 'common'})} textSize='text-[24px]'/>
                        </Link>
                    </div>
                </div>
            </div>
        
      </main>
      <Footer currentPage='company' locale={locale}/>
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