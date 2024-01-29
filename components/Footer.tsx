import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

interface FooterProps {
    currentPage: string,
    locale: string
}

export default function Footer(props: FooterProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const [suscriptionEmail, setSuscriptionEmail] = useState('');
  
    return (
      <footer>
      <Script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></Script> 
        <div id='footer' className='w-full bg-black text-white lg:px-20 px-10 py-10'>
            <div className='grid lg:grid-cols-4 grid-cols-1'>
                <div className='col-span-1 fontedBebas'>
                    <img className='w-20 mx-4' src='/assets/ginevar_logo_light.png' alt='Ginevar'/>
                    <div className='mx-4'>
                        <Link href='mailto:info@ginevar.com' className='w-full text-white hover:text-[#FAFF00] transition duration-500'>info@ginevar.com</Link>
                        <p className='opacity-50'>Monza, Italy</p>
                        <div className="clutch-widget w-[200px]" data-url="https://widget.clutch.co" data-widget-type="14" data-height="50" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2313923">
                                
                            </div>
                    </div>
                    <div className='w-full flex lg:my-0 my-4'>
                                    <ul id='comunidad-bts' className='lg:scale-50 scale-50'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-50 hover:opacity-100'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='lg:scale-50 scale-50'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-50 hover:opacity-100'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='lg:scale-50 scale-50'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-50 hover:opacity-100'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='fontedBebas text-white text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                        </div>
                    
                </div>
                <div className='lg:col-span-2 col-span-1'>
                    <div className='mx-4 fontedBebas grid lg:grid-cols-3 grid-cols-1 lg:my-0 my-4'>
                        <div className='col-span-1'>
                            <Link href='/' className='block text-white hover:text-[#FAFF00] transition duration-500'>{t('main_menu_item_home', { ns: 'common'})}</Link>
                            <br/>
                            <Link href='/get-in-touch' className='block text-white hover:text-[#FAFF00] transition duration-500'>{t('main_menu_item_get_in_touch', { ns: 'common'})}</Link>
                            <br/>
                            <Link href='/sitemap' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>Sitemap</Link>
                            <Link href='/legal/privacy-policy' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_privacy_policy', { ns: 'common'})}</Link>
                            <Link href='/legal/cookies-policy' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_cookies_policy', { ns: 'common'})}</Link>
                            <br/>
                        </div>
                        <div className='col-span-1'>
                        <p className='block text-white transition duration-500'>{t('main_menu_item_services', { ns: 'common'})}</p>
                        <Link href='/services/our-recipe' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_services_our_recipe', { ns: 'common'})}</Link>
                        <Link href='/services/solutions' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_services_solutions', { ns: 'common'})}</Link>
                        <Link href='/services/portfolio' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_services_portfolio', { ns: 'common'})}</Link>
                        <br/>
                        </div>
                        <div className='col-span-1'>
                        <p className='block text-white transition duration-500'>{t('main_menu_item_company', { ns: 'common'})}</p>
                        <Link href='/company/about-us' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_company_about_us', { ns: 'common'})}</Link>
                        <br/>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                 <div className='mx-4 fontedBebas'>
                 <p className='block text-white transition duration-500'>{t('main_menu_item_resources', { ns: 'common'})}</p>
                        <Link href='/resources/blog' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_resources_blog', { ns: 'common'})}</Link>
                        <Link href='/resources/press-kit' className='block text-white hover:text-[#FAFF00] opacity-50 hover:opacity-75 transition duration-500'>{t('main_menu_item_resources_press_kit', { ns: 'common'})}</Link>
                        <br/>
                        {/* <p className='block text-white hover:text-[#FAFF00] transition duration-500'>{t('footer_subscribe_label', { ns: 'common'})}</p>
                        <input className='fontedBebas px-2 py-1 leading-none w-full appearance-none bg-white border-none focus:outline-none focus:outline-non placeholder-gray-500 text-black placeholder-opacity-[0.25]' value={suscriptionEmail} onChange={(e) => setSuscriptionEmail(e.target.value)} placeholder={t('footer_subscribe_placeholder', { ns: 'common'})} />
                        <div className='w-[140px] py-4'>
                            <Button light={true} title='Submit'/>
                        </div> */}
                 </div>
                </div>
            </div>
            <div className='w-full text-center fontedBebas text-white'>
                <p className='opacity-50'>© 2024 ginevar </p>
            </div>
        </div>
      </footer>
    )
  }