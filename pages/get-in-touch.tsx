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
import { useEffect, useState } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import Button from '@/components/Button';
import Link from 'next/link';
import { sendContact } from '@/services/contact';

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const [contactFullName, setContactFullName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  useEffect(() => {
    initFlowbite();
  }, [])

  const submit = async() => {
    
    let _result = await sendContact(contactEmail, 'Message from '+contactFullName+': '+contactFullName);
    
    if(_result.id > 0) {
      alert(t('get_in_touch_sent', { ns: 'common'}))
    }
  }

  return (
    <>
      <Header currentPage='get-in-touch' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas `}
      >
      <div className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
          <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-4.png' alt='Ginevar - Banner'/>
          <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
          <p className='relative text-center text-white text-[72px]'>
              {t('main_menu_item_get_in_touch', { ns: 'common'})}
          </p>
      </div>
      <div className='lg:px-20 px-10 py-10 '>
        <div className='grid lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2 col-span-1'>
                <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                    {t('get_in_touch_say_hello', { ns: 'common'})}
                </h1>
                <p className='fontedBebas text-white lg:text-[36px] text-[26px] mt-0 mb-4'>
                    {t('get_in_touch_lets_talk', { ns: 'common'})}
                </p>
                <div className='grid grid-cols-2 gap-1'>
                    <div className='col-span-1'>
                    <input className='fontedBebas px-2 py-1 leading-none w-full appearance-none bg-white border-none focus:outline-none focus:outline-non placeholder-gray-500 text-black placeholder-opacity-[0.25]' value={contactFullName} onChange={(e) => setContactFullName(e.target.value)} placeholder={t('get_in_touch_field_full_name', { ns: 'common'})} />
                    </div>
                    <div className='col-span-1'>
                    <input className='fontedBebas px-2 py-1 leading-none w-full appearance-none bg-white border-none focus:outline-none focus:outline-non placeholder-gray-500 text-black placeholder-opacity-[0.25]' value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder={t('get_in_touch_field_email', { ns: 'common'})} />
                    </div>
                </div>
                <textarea rows={8} style={{resize: 'none'}} className='mt-1 fontedBebas px-2 py-1 leading-none w-full appearance-none bg-white border-none focus:outline-none focus:outline-non placeholder-gray-500 text-black placeholder-opacity-[0.25]' value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} placeholder={t('get_in_touch_field_message', { ns: 'common'})} />
                <div className='w-full'>
                    <div onClick={() => {
                      submit();
                    }} className='flex items-end content-end justify-end'><Button light={true} title={t('get_in_touch_field_submit', { ns: 'common'})}/></div>
                </div>
            </div>
            <div className='col-span-1 lg:px-10'>
            <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                    {t('get_in_touch_contact_us', { ns: 'common'})}
                </h1>
                <Link href='mailto:info@ginevar.com'>
                <div className={`flex cursor-pointer group text-center bg-black text-white hover:text-[#FFF238] px-4 text-[14px] py-2 transition duration-500  drop-shadow-[0px_4px_rgba(255,242,56,0.25)] hover:drop-shadow-[4px_4px_rgba(255,242,56,1)]`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-6 lg:h-6 lg:bottom-0 bottom-4 w-6 h-6 mr-4 transition duration-200 fill-white group-hover:fill-[#FAFF00]' viewBox="0 0 79 78" fill="none">
                    <g clip-path="url(#clip0_296_404)">
                    <path d="M9.93018 17.0625C8.58955 17.0625 7.49268 18.1594 7.49268 19.5V22.8668L33.772 44.4387C36.9255 47.0285 41.4501 47.0285 44.6036 44.4387L70.8677 22.8668V19.5C70.8677 18.1594 69.7708 17.0625 68.4302 17.0625H9.93018ZM7.49268 32.3273V58.5C7.49268 59.8406 8.58955 60.9375 9.93018 60.9375H68.4302C69.7708 60.9375 70.8677 59.8406 70.8677 58.5V32.3273L49.2349 50.0906C43.3849 54.8895 34.9603 54.8895 29.1255 50.0906L7.49268 32.3273ZM0.180176 19.5C0.180176 14.1223 4.55244 9.75 9.93018 9.75H68.4302C73.8079 9.75 78.1802 14.1223 78.1802 19.5V58.5C78.1802 63.8777 73.8079 68.25 68.4302 68.25H9.93018C4.55244 68.25 0.180176 63.8777 0.180176 58.5V19.5Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_296_404">
                    <rect width="78" height="78" fill="white" transform="translate(0.180176)"/>
                    </clipPath>
                    </defs>
                    </svg> info@ginevar.com
                </div>
                </Link><br/>
                <Link href='mailto:careers@ginevar.com'>
                <div className={`flex cursor-pointer group text-center bg-black text-white hover:text-[#FFF238] px-4 text-[14px] py-2 transition duration-500  drop-shadow-[0px_4px_rgba(255,242,56,0.25)] hover:drop-shadow-[4px_4px_rgba(255,242,56,1)]`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-6 lg:h-6 lg:bottom-0 bottom-4 w-6 h-6 mr-4 transition duration-200 fill-white group-hover:fill-[#FAFF00]' viewBox="0 0 79 78" fill="none">
                    <g clip-path="url(#clip0_296_404)">
                    <path d="M9.93018 17.0625C8.58955 17.0625 7.49268 18.1594 7.49268 19.5V22.8668L33.772 44.4387C36.9255 47.0285 41.4501 47.0285 44.6036 44.4387L70.8677 22.8668V19.5C70.8677 18.1594 69.7708 17.0625 68.4302 17.0625H9.93018ZM7.49268 32.3273V58.5C7.49268 59.8406 8.58955 60.9375 9.93018 60.9375H68.4302C69.7708 60.9375 70.8677 59.8406 70.8677 58.5V32.3273L49.2349 50.0906C43.3849 54.8895 34.9603 54.8895 29.1255 50.0906L7.49268 32.3273ZM0.180176 19.5C0.180176 14.1223 4.55244 9.75 9.93018 9.75H68.4302C73.8079 9.75 78.1802 14.1223 78.1802 19.5V58.5C78.1802 63.8777 73.8079 68.25 68.4302 68.25H9.93018C4.55244 68.25 0.180176 63.8777 0.180176 58.5V19.5Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_296_404">
                    <rect width="78" height="78" fill="white" transform="translate(0.180176)"/>
                    </clipPath>
                    </defs>
                    </svg> careers@ginevar.com
                </div>
                </Link>

                <br/>
                <h1 className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                    {t('get_in_touch_socials', { ns: 'common'})}
                </h1>
                <div className='w-full flex lg:my-0 my-4'>
                                    <ul id='comunidad-bts' className='scale-75'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='scale-75'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='scale-75'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                        </div>
            </div>
        </div>
        </div>
      </main>
      <Footer currentPage='get-in-touch' locale={locale}/>
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