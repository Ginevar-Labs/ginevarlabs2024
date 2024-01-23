import CommonMarquee from '@/components/CommonMarquee';
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

export default function Home({ blog, locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='mobilestudio' locale={locale}/>
      <main
        className={`flex min-h-screen flex-col`}
      >
        <div id='home' className='my-10 w-full '>
            <div className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>{t('services_menu_item_mobile_studio', { ns: 'common'})}</h1>
            </div>

            <CommonMarquee text={t('mobile_studio_marquee_full_cycle', { ns: 'common'})}/>

            <div className='lg:px-40 px-10 my-12'>
                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#82A5F8]'>{t('mobile_studio_fc_consultation', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                        {t('mobile_studio_fc_consultation_1a', { ns: 'common'})} <u>{t('mobile_studio_fc_consultation_1b', { ns: 'common'})}</u>{t('mobile_studio_fc_consultation_1c', { ns: 'common'})}<u>{t('mobile_studio_fc_consultation_1d', { ns: 'common'})}</u>{t('mobile_studio_fc_consultation_1e', { ns: 'common'})} <u>{t('mobile_studio_fc_consultation_1f', { ns: 'common'})}</u>{t('mobile_studio_fc_consultation_1g', { ns: 'common'})}<span className=' text-[#82A5F8]'>{t('mobile_studio_fc_consultation_1h', { ns: 'common'})}</span>{t('mobile_studio_fc_consultation_1i', { ns: 'common'})} <b className='text-black'>{t('mobile_studio_fc_consultation_1j', { ns: 'common'})}</b>{t('mobile_studio_fc_consultation_1k', { ns: 'common'})}<b className='text-black'>{t('mobile_studio_fc_consultation_1l', { ns: 'common'})}</b>{t('mobile_studio_fc_consultation_1m', { ns: 'common'})}<b className='text-black'>{t('mobile_studio_fc_consultation_1n', { ns: 'common'})}</b>
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_consultation_2', { ns: 'common'})}
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_consultation_3', { ns: 'common'})}
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#9DC79C]'>{t('mobile_studio_fc_prototyping', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_prototyping_1a', { ns: 'common'})}<span className='text-[#9DC79C]'>{t('mobile_studio_fc_prototyping_1b', { ns: 'common'})}</span>{t('mobile_studio_fc_prototyping_1c', { ns: 'common'})}<span className='text-[#9DC79C]'>{t('mobile_studio_fc_prototyping_1d', { ns: 'common'})}</span>{t('mobile_studio_fc_prototyping_1e', { ns: 'common'})}<u>{t('mobile_studio_fc_prototyping_1f', { ns: 'common'})}</u>{t('mobile_studio_fc_prototyping_1g', { ns: 'common'})}<u>{t('mobile_studio_fc_prototyping_1h', { ns: 'common'})}</u>{t('mobile_studio_fc_prototyping_1i', { ns: 'common'})}<u>{t('mobile_studio_fc_prototyping_1j', { ns: 'common'})}</u>{t('mobile_studio_fc_prototyping_1k', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_prototyping_1l', { ns: 'common'})}</span>{t('mobile_studio_fc_prototyping_1m', { ns: 'common'})}
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_prototyping_2', { ns: 'common'})}
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#747473]'>{t('mobile_studio_fc_building', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_building_1a', { ns: 'common'})}<u>{t('mobile_studio_fc_building_1b', { ns: 'common'})}</u>{t('mobile_studio_fc_building_1c', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_building_1d', { ns: 'common'})}</span>{t('mobile_studio_fc_building_1e', { ns: 'common'})}
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_building_2a', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_building_2b', { ns: 'common'})}</span>{t('mobile_studio_fc_building_2c', { ns: 'common'})}
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#EE807C]'>{t('mobile_studio_fc_testing', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_testing_1a', { ns: 'common'})}<span className='text-[#EE807C]'>{t('mobile_studio_fc_testing_1b', { ns: 'common'})}</span>{t('mobile_studio_fc_testing_1c', { ns: 'common'})}<span className='text-[#EE807C]'>{t('mobile_studio_fc_testing_1d', { ns: 'common'})}</span>{t('mobile_studio_fc_testing_1e', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_testing_1f', { ns: 'common'})}</span>{t('mobile_studio_fc_testing_1g', { ns: 'common'})}
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_testing_2a', { ns: 'common'})}<u><span className='text-black'>{t('mobile_studio_fc_testing_2b', { ns: 'common'})}</span></u>{t('mobile_studio_fc_testing_2c', { ns: 'common'})}
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#EE80B7]'>{t('mobile_studio_fc_launch', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_launch_1a', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('mobile_studio_fc_launch_1b', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_1c', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('mobile_studio_fc_launch_1d', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_1e', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('mobile_studio_fc_launch_1f', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_1g', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_launch_1h', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_1i', { ns: 'common'})}<u>{t('mobile_studio_fc_launch_1j', { ns: 'common'})}</u>{t('mobile_studio_fc_launch_1k', { ns: 'common'})}
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_launch_2a', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_launch_2b', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_2c', { ns: 'common'})}<u>{t('mobile_studio_fc_launch_2d', { ns: 'common'})}</u>{t('mobile_studio_fc_launch_2e', { ns: 'common'})}<u>{t('mobile_studio_fc_launch_2f', { ns: 'common'})}</u>{t('mobile_studio_fc_launch_2g', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_launch_2h', { ns: 'common'})}</span>{t('mobile_studio_fc_launch_2i', { ns: 'common'})}
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#B7C656]'>{t('mobile_studio_fc_maintenance', { ns: 'common'})}</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                    {t('mobile_studio_fc_maintenance_1a', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_maintenance_1b', { ns: 'common'})}</span>{t('mobile_studio_fc_maintenance_1c', { ns: 'common'})}<span className='text-[#B7C656]'>{t('mobile_studio_fc_maintenance_1d', { ns: 'common'})}</span>{t('mobile_studio_fc_maintenance_1e', { ns: 'common'})}<span className='text-[#B7C656]'>{t('mobile_studio_fc_maintenance_1f', { ns: 'common'})}</span>
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    <span className='text-[#B7C656]'>{t('mobile_studio_fc_maintenance_2a', { ns: 'common'})}</span>{t('mobile_studio_fc_maintenance_2b', { ns: 'common'})}<u>{t('mobile_studio_fc_maintenance_2c', { ns: 'common'})}</u>{t('mobile_studio_fc_maintenance_2d', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_maintenance_2e', { ns: 'common'})}</span>{t('mobile_studio_fc_maintenance_2f', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_fc_maintenance_2g', { ns: 'common'})}</span>{t('mobile_studio_fc_maintenance_2h', { ns: 'common'})}
                    </div>
                </div>
                
            </div>

            <CommonMarquee text={t('mobile_studio_marquee_extra_services', { ns: 'common'})}/>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#EE80B7] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#7D7D72'
                    }}>Landing Pages</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>{t('mobile_studio_landing_pages_a', { ns: 'common'})}<u>{t('mobile_studio_landing_pages_b', { ns: 'common'})}</u>{t('mobile_studio_landing_pages_c', { ns: 'common'})}<u>{t('mobile_studio_landing_pages_d', { ns: 'common'})}</u>{t('mobile_studio_landing_pages_e', { ns: 'common'})} <span className='text-black'>{t('mobile_studio_landing_pages_f', { ns: 'common'})}</span>{t('mobile_studio_landing_pages_g', { ns: 'common'})}</p>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#78A6FF] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#EE807C'
                    }}>Backend</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>{t('mobile_studio_backend_a', { ns: 'common'})}<u>{t('mobile_studio_backend_b', { ns: 'common'})}</u>{t('mobile_studio_backend_c', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_backend_d', { ns: 'common'})}</span>{t('mobile_studio_backend_e', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_backend_f', { ns: 'common'})}</span>{t('mobile_studio_backend_g', { ns: 'common'})}</p>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#B3C73E] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#82A5F8'
                    }}>Deployment</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>{t('mobile_studio_deployment_a', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_deployment_b', { ns: 'common'})}</span>{t('mobile_studio_deployment_c', { ns: 'common'})}<span className='text-black'>{t('mobile_studio_deployment_d', { ns: 'common'})}</span>{t('mobile_studio_deployment_e', { ns: 'common'})}<span className='text-black'><u>{t('mobile_studio_deployment_f', { ns: 'common'})}</u></span>{t('mobile_studio_deployment_g', { ns: 'common'})}<u>{t('mobile_studio_deployment_h', { ns: 'common'})}</u>{t('mobile_studio_deployment_i', { ns: 'common'})}</p>
                </div>
            </div>

            <CommonMarquee text={t('mobile_studio_marquee_use_cases', { ns: 'common'})}/>

        </div>
        
        <ContactBox locale={locale}/>
      </main>
      <Footer currentPage='mobilestudio' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  const _blogs = await fetch('http://localhost:3000/api/engineeringblog')
  const _blogData = await _blogs.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'eb'])),
      blog: _blogData,
      locale: locale
    },
  };
};