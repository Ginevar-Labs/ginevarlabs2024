import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Button from './Button';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';


interface HeaderProps {
    currentPage: string,
    locale: string,
    subtitle?: string
}

export default function Header(props: HeaderProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header>
        <Head>
            <title>{props.subtitle ? `${props.subtitle} - ` : ""} {t('app_title', { ns: 'common'})}</title>
            <meta name="description" content={t('app_description', { ns: 'common'})} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>
            
          </Head>

          <nav className="border-gray-200 bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" locale={props.locale} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/ginevar_banner_light.png" className="h-16" alt="Ginevar Logo" />
                </Link>
                <button onClick={() => {
                    setMenuOpen(!menuOpen)
                }} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">{t('main_menu_aria', { ns: 'common'})}</span>
                    { !menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                    <path d="M19.8875 31.3541H79.0124M19.8875 50.1666H79.0124M19.8875 68.9791H79.0124" stroke="#FFF238" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.4375 24.1875H72.5625M13.4375 43H72.5625M13.4375 61.8125H72.5625" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
<path d="M37.5 70.9792L75.0125 33.3542M38.5 32L75.0125 70.9792" stroke="#FFF238" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.5 68.5L70 30M29.5 30L70 68.5" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg> }
                </button>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
                    <li>
                    <Link href='/' locale={props.locale} className="block py-2 px-3 rounded lg:bg-transparent text-white lg:p-0 transition duration-500 fontedBebas hover:text-[#FAFF00] mt-1" aria-current="page">{t('main_menu_item_home', { ns: 'common'})}</Link>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-white rounded lg:border-0 lg:p-0 lg:w-auto transition duration-500 fontedBebas hover:text-[#FAFF00] mt-1">{t('main_menu_item_services', { ns: 'common'})} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full lg:w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            <li>
                            <Link href='/services/our-recipe' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_services_our_recipe', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href='/services/solutions' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_services_solutions', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href='/services/portfolio' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_services_portfolio', { ns: 'common'})}</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button id="dropdownNavbarLinkAboutUs" data-dropdown-toggle="dropdownAboutUs" className="flex items-center justify-between w-full py-2 px-3 text-white rounded lg:border-0 lg:p-0 lg:w-auto transition duration-500 fontedBebas hover:text-[#FAFF00] mt-1">{t('main_menu_item_company', { ns: 'common'})} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdownAboutUs" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            
                            <li>
                            <Link href='/company/about-us' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_company_about_us', { ns: 'common'})}</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button id="dropdownNavbarLinkResources" data-dropdown-toggle="dropdownResources" className="flex items-center justify-between w-full py-2 px-3 text-white rounded lg:border-0 lg:p-0 lg:w-auto transition duration-500 fontedBebas hover:text-[#FAFF00] mt-1">{t('main_menu_item_resources', { ns: 'common'})} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdownResources" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-44 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                            
                            <li>
                            <Link href='https://medium.com/ginevar-labs' target='_blank' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_resources_blog', { ns: 'common'})}</Link>
                            </li>
                            <li>
                            <Link href='/resources/press-kit' locale={props.locale} className="block px-4 py-2 transition duration-500 fontedBebas hover:underline">{t('main_menu_item_resources_press_kit', { ns: 'common'})}</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <Link href='/get-in-touch' className="flex underline decoration-4 decoration-[#403D0E] hover:decoration-[#FAFF00] items-center justify-between w-full py-2 px-3 text-white rounded lg:border-0 lg:p-0 lg:w-auto transition duration-500 fontedBebas hover:text-[#FAFF00] mt-1">{t('main_menu_item_get_in_touch', { ns: 'common'})}</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
      </header>
    )
  }