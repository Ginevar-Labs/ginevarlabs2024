import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';
import Button from './Button';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';

interface FooterProps {
    currentPage: string,
    locale: string
}

export default function Footer(props: FooterProps) {
    const { t } = useTranslation();
    const router = useRouter();
  
    return (
      <footer>
      <Script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></Script> 
        <div className='grid sm:grid-cols-4 grid-cols-1 lg:px-40 px-10 my-10'>
            <div className='sm:col-span-1 w-full col-span-1 fontedBebas lg:text-left text-center'>
                <div className='w-full grid lg:grid-cols-4 grid-cols-1 '>
                    <div className='w-full col-span-1 fontedBebas lg:text-left text-center lg:px-[20%] px-[40%]'>
                        <img src='/assets/ginevar_logo_dark.png' className=''/>
                    </div>
                    <div className='w-full col-span-3 fontedBebas lg:text-left text-center'>
                        <div className='w-full grid lg:grid-cols-2 grid-cols-1 px-6 mb-6'>
                            <div className='lg:w-[50%] w-full grid grid-cols-1'>
                                <p>{t('footer_location', {ns: 'common'})}</p>
                            </div>
                            <div className='w-full grid lg:grid-cols-1 grid-cols-0'>
                                <span/>
                            </div>
                            </div>
                        <div className='w-full px-6 '>
                            <a href="mailto:info@ginevar.com" className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF78B9]'>info@ginevar.com</a>
                            <div className="clutch-widget w-[200px]" data-url="https://widget.clutch.co" data-widget-type="14" data-height="50" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2313923">
                                
                            </div>
                            
                            
                        </div>
                        <div className='w-full px-6'>
                        <Link href="/privacy-policy" locale={props.locale} className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF7878]'>{t('footer_privacy_policy', { ns: 'common'})}</Link>
                        </div>
                        <div className='w-full px-6'>
                        <Link href="/cookies-policy" locale={props.locale} className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#8BC694]'>{t('footer_cookies_policy', { ns: 'common'})}</Link>
                        </div>
                            
                    </div>
                </div>
            </div>
            <div className='sm:col-span-2 w-full col-span-1 fontedBebas lg:text-left text-center px-10'>
                <div className='w-full '>
                    <div className='w-full fontedBebas lg:text-left text-center'>
                        <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:px-6 px-0 mb-6'>
                            <div className='lg:w-[50%] w-full grid grid-cols-1 lg:mt-0 mt-6'>
                                <p>{t('footer_sitemap_menu', { ns: 'common'})}</p>
                            </div>
                            <div className='w-full grid lg:grid-cols-1 grid-cols-0'>
                                <span/>
                            </div>
                            </div>
                        <div className='grid grid-cols-2 '>
                            <div className='col-span-1 w-full lg:px-6 px-0 lg:text-left text-center'>
                                <Link locale={props.locale} href={props.currentPage == 'home' ? '#' : '/#'} className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#B3C73E]'><p>{t('main_menu_item_home', { ns: 'common'})}</p></Link>
                                <hr className='my-4'/>
                                <Link locale={props.locale} href={props.currentPage == 'home' ? '#services' : '/#services'} className='transition duration-200 opacity-10 hover:opacity-75 hover:text-[#78A6FF]'><p>{t('main_menu_item_services', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href="/mobile-studio" className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF78B9]'><p>{t('services_menu_item_mobile_studio', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href="/shopify-builders" className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF7878]'><p>{t('services_menu_item_shopify_builders', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href="/web3-studio" className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#B3C73E]'><p>{t('services_menu_item_web3_studio', { ns: 'common'})}</p></Link>
                                <hr className='my-4'/>
                                <Link locale={props.locale} href={props.currentPage == 'home' ? '#portfolio' : '/#portfolio'} className='transition duration-200 opacity-10 hover:opacity-75 hover:text-[#8BC694]'><p> {t('main_menu_item_portfolio', { ns: 'common'})} </p></Link>
                            </div>
                            <div className='col-span-1 w-full lg:px-6 px-0 lg:text-left text-center'>
                                <Link locale={props.locale} href={props.currentPage == 'aboutus' ? '#' : '/aboutus#'} className='transition duration-200 opacity-10 hover:opacity-75'><p>{t('main_menu_item_about_us', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href={props.currentPage == 'aboutus' ? '#ourteam' : '/aboutus#ourteam'} className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF78B9]'><p>{t('about_us_menu_item_our_team', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href={props.currentPage == 'aboutus' ? '#faq' : '/aboutus#faq'} className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#8BC694]'><p>{t('about_us_menu_item_faq', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href={props.currentPage == 'aboutus' ? '#careers' : '/aboutus#careers'} className='transition duration-200 opacity-25 hover:opacity-100'><p>{t('about_us_menu_item_careers', { ns: 'common'})}</p></Link>
                                <Link locale={props.locale} href="#contact" className='transition duration-200 opacity-25 hover:opacity-100 hover:text-[#FF7878]'><p>{t('about_us_menu_item_contact', { ns: 'common'})}</p></Link>
                                <hr className='my-4'/>
                                <Link locale={props.locale} href={props.currentPage == 'home' ? '#blog' : '/#blog'} className='transition duration-200 opacity-10 hover:opacity-75 hover:text-[#FF78B9]'><p>{t('main_menu_item_blog_full', { ns: 'common'})}</p></Link>
                                
                            </div>
                        </div>
                        
                            
                    </div>
                </div>
            </div>
            <div className='sm:col-span-1 w-full col-span-1 fontedBebas lg:text-left text-center lg:px-0 px-0'>
            <div className='w-full'>
                    <div className='w-full fontedBebas lg:text-left text-center'>
                        <div className='w-full grid lg:grid-cols-2 grid-cols-1 px-6 mb-6'>
                            <div className='lg:w-[50%] w-full grid grid-cols-1 lg:mt-0 mt-6'>
                                <p>{t('footer_social_networks_title', { ns: 'common'})}</p>
                            </div>
                            <div className='w-full grid lg:grid-cols-1 grid-cols-0'>
                                <span/>
                            </div>
                            </div>
                        <div className='w-full justify-center grid grid-cols-3 lg:my-0 my-8'>
                                <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                </div>
                                <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                </div>
                                <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                                </div>
                        </div>
                        <div className='w-full justify-center grid grid-cols-3 lg:my-0 my-8'>
                                <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-ig' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.instagram.com/ginevarlabs" className='w-full'><i className="fab fa-instagram instagram flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-12px] ml-0'>Instagram</span></div></Link></li>
                                    </ul>
                                </div>
                                {/* <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-twitter' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="#" className='w-full'><i className="fab fa-twitter twitter flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Twitter</span></div></Link></li>
                                    </ul>
                                </div>
                                <div className='col-span-1 w-full gap-1'>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-75 scale-100]'>
                                        <li id='cbts-behance' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="#" className='w-full'><i className="fab fa-behance behance flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Behance</span></div></Link></li>
                                    </ul>
                                </div> */}
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full text-center fontedBebas my-4 lg:px-40 px-20'>
            <p>{t('footer_copyright', { ns: 'common'})}</p>
        </div>
      </footer>
    )
  }