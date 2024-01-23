import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';
import Button from './Button';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';

interface HeaderProps {
    currentPage: string,
    locale: string
}

export default function Header(props: HeaderProps) {
    const { t } = useTranslation();
    const router = useRouter();
  
    return (
      <header>
        <Head>
            <title>{t('app_title', { ns: 'common'})}</title>
            <meta name="description" content={t('app_description', { ns: 'common'})} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>
          </Head>

          <nav className="border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" locale={props.locale} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/ginevar_banner_dark.png" className="h-16" alt="Ginevar Logo" />
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">{t('main_menu_aria', { ns: 'common'})}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                    <path d="M27.75 43.75H110.25M27.75 70H110.25M27.75 96.25H110.25" stroke="#FFF238" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.75 33.75H101.25M18.75 60H101.25M18.75 86.25H101.25" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
                    <li>
                    <Link href={props.currentPage == 'home' ? '#' : '/#'} locale={props.locale} className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#FF7878] mt-1" aria-current="page">{t('main_menu_item_home', { ns: 'common'})}</Link>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-black rounded lg:border-0 lg:p-0 lg:w-auto transition duration-200 fontedBebas hover:text-[#8BC694] mt-1">{t('main_menu_item_services', { ns: 'common'})} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-[#FAF9E4] divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full lg:w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            <li>
                            <Link href={props.currentPage == 'home' ? '#services' : '/#services'} locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#B3C73E]">{t('services_menu_item_solutions', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href="/mobile-studio" locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#B3C73E]">{t('services_menu_item_mobile_studio', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href="/shopify-builders" locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#FF7878]">{t('services_menu_item_shopify_builders', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href="/web3-studio" locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#78A6FF]">{t('services_menu_item_web3_studio', { ns: 'common'})}</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <Link href={props.currentPage == 'home' ? '#portfolio' : '/#portfolio'} locale={props.locale} className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#B3C73E] mt-1" aria-current="page">{t('main_menu_item_portfolio', { ns: 'common'})}</Link>
                    </li>
                    
                    <li>
                        <button id="dropdownNavbarLinkAboutUs" data-dropdown-toggle="dropdownAboutUs" className="flex items-center justify-between w-full py-2 px-3 text-black rounded lg:border-0 lg:p-0 lg:w-auto transition duration-200 fontedBebas hover:text-[#FF78B9] mt-1">{t('main_menu_item_about_us', { ns: 'common'})} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>
                        <div id="dropdownAboutUs" className="z-10 hidden font-normal bg-[#FAF9E4] divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Link href={props.currentPage == 'aboutus' ? '#ourteam' : '/aboutus#ourteam'} locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#78A6FF]">{t('about_us_menu_item_our_team', { ns: 'common'})}</Link>
                            </li>
                            <li>
                                <Link href={props.currentPage == 'aboutus' ? '#faq' : '/aboutus#faq'} locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#FF7878]">{t('about_us_menu_item_faq', { ns: 'common'})}</Link>
                            </li>
                            <li>
                                <Link href={props.currentPage == 'aboutus' ? '#careers' : '/aboutus#careers'} locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#78A6FF]">{t('about_us_menu_item_careers', { ns: 'common'})}</Link>
                            </li>
                            <li>
                                <Link href="#contact" locale={props.locale} className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#B3C73E]">{t('about_us_menu_item_contact', { ns: 'common'})}</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    {/* <li>
                    <a href="#" className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#6E6E6E] mt-1" aria-current="page">Careers</a>
                    </li> */}
                    <li>
                    <Link href={props.currentPage == 'home' ? '#blog' : '/#blog'} locale={props.locale} className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#78A6FF] mt-1" aria-current="page">{t('main_menu_item_blog', { ns: 'common'})}</Link>
                    </li>
                    <li>
                    <Link href="#contact" locale={props.locale} className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#B3C73E]" aria-current="page"><Button title={t('main_menu_book_a_call', { ns: 'common'})}></Button></Link>
                    </li>
                    <li>
                    <a href="#" data-dropdown-toggle="dropdownLanguage" className="flex block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#78A6FF] mt-1" aria-current="page"> <svg className='mt-1 mr-2 hover:text-[#78A6FF]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 80" fill="none">
                        <g clipPath="url(#clip0_150_752)">
                            <path d="M55 40C55 43.4688 54.8125 46.8125 54.4844 50H25.5156C25.1719 46.8125 25 43.4688 25 40C25 36.5312 25.1875 33.1875 25.5156 30H54.4844C54.8281 33.1875 55 36.5312 55 40ZM59.5 30H78.7344C79.5625 33.2031 80 36.5469 80 40C80 43.4531 79.5625 46.7969 78.7344 50H59.5C59.8281 46.7812 60 43.4375 60 40C60 36.5625 59.8281 33.2188 59.5 30ZM77.0938 25H58.8594C57.2969 15.0156 54.2031 6.65625 50.2188 1.3125C62.4531 4.54688 72.4062 13.4219 77.0781 25H77.0938ZM53.7969 25H26.2031C27.1562 19.3125 28.625 14.2813 30.4219 10.2031C32.0625 6.51563 33.8906 3.84375 35.6562 2.15625C37.4062 0.5 38.8594 0 40 0C41.1406 0 42.5938 0.5 44.3438 2.15625C46.1094 3.84375 47.9375 6.51563 49.5781 10.2031C51.3906 14.2656 52.8438 19.2969 53.7969 25ZM21.1406 25H2.90625C7.59375 13.4219 17.5312 4.54688 29.7812 1.3125C25.7969 6.65625 22.7031 15.0156 21.1406 25ZM1.26562 30H20.5C20.1719 33.2188 20 36.5625 20 40C20 43.4375 20.1719 46.7812 20.5 50H1.26562C0.4375 46.7969 0 43.4531 0 40C0 36.5469 0.4375 33.2031 1.26562 30ZM30.4219 69.7812C28.6094 65.7188 27.1562 60.6875 26.2031 55H53.7969C52.8438 60.6875 51.375 65.7188 49.5781 69.7812C47.9375 73.4688 46.1094 76.1406 44.3438 77.8281C42.5938 79.5 41.1406 80 40 80C38.8594 80 37.4062 79.5 35.6562 77.8438C33.8906 76.1562 32.0625 73.4844 30.4219 69.7969V69.7812ZM21.1406 55C22.7031 64.9844 25.7969 73.3438 29.7812 78.6875C17.5312 75.4531 7.59375 66.5781 2.90625 55H21.1406ZM77.0938 55C72.4062 66.5781 62.4688 75.4531 50.2344 78.6875C54.2188 73.3438 57.2969 64.9844 58.875 55H77.0938Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_150_752">
                            <rect width="80" height="80" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg><span className=''>{t('lang_selected', { ns: 'common'}).substring(0, 3)}</span> <svg className="w-2.5 h-2.5 ms-2.5 mt-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></a>
                        <div id="dropdownLanguage" className="z-10 hidden font-normal bg-[#FAF9E4] divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a onClick={() => {
                                    router.push('/', undefined, { locale: 'en'})
                                }} href="#" className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#78A6FF]">{t('main_menu_lang_eng', { ns: 'common'})}</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    router.push('/', undefined, { locale: 'es'})
                                }} href="#" className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#FF7878]">{t('main_menu_lang_es', { ns: 'common'})}</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    router.push('/', undefined, { locale: 'it'})
                                }} href="#" className="block px-4 py-2 transition duration-200 fontedBebas hover:text-[#B3C73E]">{t('main_menu_lang_it', { ns: 'common'})}</a>
                            </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
      </header>
    )
  }