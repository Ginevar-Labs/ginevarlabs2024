
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='services' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas overflow-x-hidden`}
      >
        <motion.div initial={{height:0}}  animate={{ height: "revert-layer" }}  transition={{ type: "spring", bounce: 0.25 }} className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-6.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_services_solutions', { ns: 'common'})}
            </p>
        </motion.div>

        <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{ type: "spring", bounce: 0.25 }} className='lg:px-20 px-10 py-10'>
            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px] leading-none'>
                {t('main_menu_item_services_solutions_mobile_title', { ns: 'common'})}
            </h1>
            <h2 className='text-white text-[26px] leading-none my-2'>
                {t('main_menu_item_services_solutions_mobile_subtitle', { ns: 'common'})}
            </h2>

            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_mobile_text_a', { ns: 'common'})}
            </p>
            <br/>
            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_mobile_text_b', { ns: 'common'})}
            </p>
            <br/>
            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_mobile_text_c', { ns: 'common'})}
            </p>
        </motion.div>
            
        <motion.div initial={{x:"-200%"}} animate={{x:"0"}} transition={{ type: "spring", bounce: 0.25 }}  className='lg:px-20 px-10 py-10'>

            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px] leading-none'>
                {t('main_menu_item_services_solutions_web_title', { ns: 'common'})}
            </h1>
            <h2 className='text-white text-[26px] leading-none my-2'>
                {t('main_menu_item_services_solutions_web_subtitle', { ns: 'common'})}
            </h2>

            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_web_text_a', { ns: 'common'})}
            </p>
    
        </motion.div>

        <motion.div initial={{x:"-300%"}} animate={{x:"0"}} transition={{ type: "spring", bounce: 0.25 }} className='lg:px-20 px-10 py-10'>
            

            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px] leading-none'>
                {t('main_menu_item_services_solutions_shopify_title', { ns: 'common'})}
            </h1>
            <h2 className='text-white text-[26px] leading-none my-2'>
                {t('main_menu_item_services_solutions_shopify_subtitle', { ns: 'common'})}
            </h2>
            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_shopify_text_a', { ns: 'common'})}
            </p>

        </motion.div>
        
        <motion.div initial={{x:"-400%"}} animate={{x:"0"}} transition={{ type: "spring", bounce: 0.25 }} className='lg:px-20 px-10 py-10'>
            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px] leading-none'>
                {t('main_menu_item_services_solutions_blockchain_title', { ns: 'common'})}
            </h1>
            <h2 className='text-white  text-[26px]  leading-none my-2'>
                {t('main_menu_item_services_solutions_blockchain_subtitle', { ns: 'common'})}
            </h2>
            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_blockchain_text_a', { ns: 'common'})}
            </p>
            <br/>
            <p className='text-white lg:text-[22px] text-[16px]  text-justify opacity-75'>
                {t('main_menu_item_services_solutions_blockchain_text_b', { ns: 'common'})}
            </p>
        </motion.div><div>

              

            <div className='text-center text-white my-10'>
                <p className='lg:w-2/3 text-center mx-auto text-[16px]'>{t('main_menu_item_services_how_we_work_title', { ns: 'common'})}</p>
                <div className='w-full'>
                    <div className='flex items-center content-center justify-center my-6'>
                        <Button light={true} title={t('main_menu_item_services_how_we_work_button', { ns: 'common'})} textSize='text-[22px]' /></div>
                </div>
            </div>

            <div 
            onClick={() => { router.push('/services/portfolio', undefined, {locale: locale})}} 
            className='cursor-pointer my-10 transition-all duration-500 relative text-white group border-dashed border-white lg:border-b-[2px] w-[80%] mx-[10%] lg:h-[300px] transition duration-500 hover:border-[#FAFF00] hover:text-[#FAFF00] hover:animate-pulse transition-all ease-in-out'>
                <div className='lg:absolute block lg:hidden lg:bottom-0 lg:left-20 border-dashed border-white border-b-[2px] '>
                        <img className='w-full h-[200px] object-cover ' src='/assets/iphone_example.png' alt={t('main_menu_item_services_check_our_portfolio', { ns: 'common'})}  />
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1'>
                        <div className='lg:col-span-3 col-span-0'></div>
                        <div className='col-span-1 lg:h-[300px] flex justify-center items-center  text-center lg:px-10'>
                            <div>
                            <p className='text-[20px]  w-full text-center'>{t('main_menu_item_services_check_our_portfolio', { ns: 'common'})}</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:absolute lg:block hidden lg:bottom-0 lg:left-20'>
                        <img className='w-full h-[300px] object-contain ' src='/assets/iphone_example.png' alt={t('main_menu_item_services_check_our_portfolio', { ns: 'common'})} />
                    </div>
                </div>
            
            <div className='mt-20 relative w-full text-center fontedBebas h-[300px] flex content-center items-center justify-center my-10'>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute top-0 left-0 lg:left-20 border-t-[3px] border-l-[3px] border-dashed border-white'/>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute bottom-0 right-0 lg:right-20 border-b-[3px] border-r-[3px] border-dashed border-white '/>
                    <div className='w-[200px]'>
                        <Link href='/get-in-touch' locale={locale}>
                            <Button light={true} title={t('main_menu_item_get_in_touch', { ns: 'common'})} textSize='text-[24px]'/>
                        </Link>
                    </div>
                </div>
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