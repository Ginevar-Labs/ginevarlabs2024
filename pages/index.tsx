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
                  {t('home_hero_left_text_a', { ns: 'common'})} <br/> {t('home_hero_left_text_b', { ns: 'common'})} <br/> {t('home_hero_left_text_c', { ns: 'common'})}
              </p>
              </div>
              <div className='relative w-full col-span-1 flex content-center justify-center items-center'>
                <img src='/assets/ginevar_logo_dark.png' alt='Ginevar dark logo' className='lg:w-[150px] w-[100px] object-fit' />
              </div>
              <div className='relative col-span-1 flex content-end justify-end items-end lg:my-10 my-2'>
                <p className='relative text-right text-white lg:text-[56px] text-[24px leading-none'>
                  {t('home_hero_right_text_a', { ns: 'common'})} <br/>{t('home_hero_right_text_b', { ns: 'common'})}
              </p>
              </div>
            </div>
        </div>

        <div className='lg:mx-20 mx-10 lg:py-10 py-0'>
          <div className='grid lg:grid-cols-4 grid-cols-1 w-full py-10'>
            <div className='lg:col-span-3 col-span-1'>
              <p className='text-white'>{t('home_mission_intro', { ns: 'common'})}</p>
            </div>
            <div className='lg:my-0 my-4 col-span-1 flex content-center items-center justify-center'>
            <Link href='/services/our-recipe' locale={locale}>
                            <Button textSize='text-[22px]' light={true} title={t('main_menu_item_services_how_we_work_button', { ns: 'common'})} />
                        </Link>
            </div>
          </div>

          <div className='mt-20 relative w-full text-center fontedBebas lg:h-[300px] h-[400px] flex content-center items-center justify-center my-10'>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute top-0 left-0 lg:left-20 border-t-[3px] border-l-[3px] border-dashed border-white'/>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute bottom-0 right-0 lg:right-20 border-b-[3px] border-r-[3px] border-dashed border-white'/>
                    <div className='w-[60%] mx-[20%]'>
                        <p className='text-white'>{t('home_mark_text_block_a', { ns: 'common'})}</p>
                    </div>
                </div>
                <div className='py-2 mb-4'>
                <h1 className='lg:text-[56px] text-[32px] fontedBebas text-center text-white'>{t('home_trusted_by', { ns: 'common'})}</h1>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] my-10 mt-4">
                
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img className='h-[40px]' src="/assets/trustedby/CHILTON.png" alt="Chilton" />
                    </li>
                    <li>
                    <img className='h-[50px]' src="/assets/trustedby/CuteCatsGang.png" alt="Cute Cats Gang" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/Icao4Pilots.png" alt="Icao 4 Pilots" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/BlindHarpyStudios.png" alt="Blind Harpy Studios" />
                    </li>
                    <li>
                    <img className='h-[30px]' src="/assets/trustedby/ISOVOX.png" alt="Isovox" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/MagnoCash.png" alt="Magno Cash" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/Korca.png" alt="Korca" />
                    </li>
                </ul>    
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li>
                        <img className='h-[40px]' src="/assets/trustedby/CHILTON.png" alt="Chilton" />
                    </li>
                    <li>
                    <img className='h-[50px]' src="/assets/trustedby/CuteCatsGang.png" alt="Cute Cats Gang" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/Icao4Pilots.png" alt="Icao 4 Pilots" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/BlindHarpyStudios.png" alt="Blind Harpy Studios" />
                    </li>
                    <li>
                    <img className='h-[30px]'src="/assets/trustedby/ISOVOX.png" alt="Isovox" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/MagnoCash.png" alt="Magno Cash" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/Korca.png" alt="Korca" />
                    </li>
                </ul>            
            </div>
      </div>

      <div className='py-2 mb-4'>
        <h1 className='lg:text-[56px] text-[32px] fontedBebas text-center text-white'>{t('home_what_we_do', { ns: 'common'})}</h1>
            
          </div>

          <div className='grid lg:grid-cols-3 grid-cols-1 w-full'>
            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_mobile_development', { ns: 'common'})}</p></div>
            </div>

            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_web_development', { ns: 'common'})}</p></div>
            </div>

            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_uiux_design', { ns: 'common'})}</p></div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 w-full lg:mt-10'>
            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_shopify', { ns: 'common'})}</p></div>
            </div>

            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_blockchain', { ns: 'common'})}</p></div>
            </div>

            <div className='transition duration-500 opacity-50 hover:opacity-100 col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_brand_identity', { ns: 'common'})}</p></div>
            </div>
          </div>
          
          <div className='w-full my-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-[70%] mx-[15%]'>
              <div className='col-span-1 flex justify-center content-center  my-4'>
                <Link href='/services/our-recipe' locale={locale}>
                  <div className='w-[200px]'>
                  <Button textSize='text-[24px]' title={t('main_menu_item_services_our_recipe', { ns: 'common'})} light={true} />
                  </div>
                </Link>
              </div>
              <div className='col-span-1 flex justify-center content-center  my-4'>
                <Link href='/services/solutions' locale={locale}>
                  <div className='w-[200px]'>
                  <Button textSize='text-[24px]' title={t('main_menu_item_services_solutions', { ns: 'common'})} light={true} />
                  </div>
                </Link>
              </div>
            </div>
          </div>


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