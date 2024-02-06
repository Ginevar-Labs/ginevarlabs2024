
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import {motion } from 'framer-motion'

export default function Home({ blog, portfolioItems, locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const router = useRouter();
  const [portfolioIndexSelected, setPortfolioIndexSelected] = useState(0);
  const [blogIndexSelected, setBlogIndexSelected] = useState(0);

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='home' locale={locale} />
      <main
        className={`flex min-h-screen flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <motion.div initial={{height:0}}  animate={{ height: "revert-layer" }}  transition={{ type: "spring", bounce: 0.25 }} className='relative w-full lg:h-[460px] h-[220px] flex justify-center items-center border-white border-dashed border-b-[2px]'>
            <motion.img  className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-1.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <div className='relative grid grid-cols-3 lg:mx-10 mx-2 w-full h-full p-2'>
              <motion.div initial={{scale:0}} animate={{scale:1}}  transition={{ type: "spring", bounce: 0.25 }}    className='relative col-span-1 flex content-start justify-start items-top lg:my-10 my-2'>
                <p className='relative text-left text-white lg:text-[56px] text-[24px] leading-none'>
                  {t('home_hero_left_text_a', { ns: 'common'})} <br/> {t('home_hero_left_text_b', { ns: 'common'})} <br/> {t('home_hero_left_text_c', { ns: 'common'})}
                </p>
              </motion.div>
              <div className='relative w-full col-span-1 flex content-center justify-center items-center'>
                <motion.img initial={{height:0}} animate={{height:"auto"}}  transition={{ type: "spring", bounce: 0.25 }}  src='/assets/ginevar_logo_dark.png' alt='Ginevar dark logo' className='lg:w-[150px] w-[100px] object-fit' />
              </div>
              <motion.div initial={{scale:0}} animate={{scale:1}}  transition={{ type: "spring", bounce: 0.25 }}   className='relative col-span-1 flex content-end justify-end items-end lg:my-10 my-2'>
                <p className='relative text-right text-white lg:text-[56px] text-[24px] leading-none'>
                  {t('home_hero_right_text_a', { ns: 'common'})} <br/>{t('home_hero_right_text_b', { ns: 'common'})}
              </p>
              </motion.div>
            </div>
        </motion.div>

        <div className='lg:mx-20 mx-10 lg:py-10 py-0'>
          <div className='grid lg:grid-cols-4 grid-cols-1 w-full py-10'>
            <div className='lg:col-span-3 col-span-1'>
              <p className='text-white text-center md:text-start'>{t('home_mission_intro', { ns: 'common'})}</p>
            </div>
            <div className='lg:my-0 my-4 col-span-1 flex content-center items-center justify-center'>
            <Link href='/services/our-recipe' locale={locale}>
                            <Button textSize='text-[22px]' light={true} title={t('main_menu_item_services_how_we_work_button', { ns: 'common'})} />
                        </Link>
            </div>
          </div>

          <div className='text-center lg:px-20'>
            <h2 className='text-white opacity-50 lg:text-[56px] text-[24px]'>{t('home_portfolio_made_by_ginevar', { ns: 'common'})}</h2>
            <p className='text-white my-4'><u>{t('home_portfolio_made_by_ginevar_subtitle', { ns: 'common'})} </u></p>
            <p className='text-white opacity-75'>{t('home_portfolio_made_by_ginevar_text', { ns: 'common'})}</p>

            <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block my-10'>
                    {
                        portfolioItems.items.length == 0 ? <div className='lg:h-[300px] h-[100px] text-center flex justify-center items-center'>
                            
                        </div> : null
                    }
                    {
                        portfolioItems.items.length >= 1 ? <div>
                            <div className='lg:block hidden '>
                                <div className='h-[300px] text-center justify-center items-center p-0 flex'>
                                {
                                    portfolioItems.items.sort((a: any, b: any) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item: any, index: any) => index >= 3 ? null : <div className={`lg:block hidden ${index == portfolioIndexSelected ? 
                                        (portfolioItems.items.length == 1 ? 'w-full' : portfolioItems.items.length == 2 ? 'w-[65%]' : 'w-[50%]') : 
                                        (portfolioItems.items.length == 1 ? 'w-full' : portfolioItems.items.length == 2 ? 'w-[35%]' : 'w-[25%]')
                                    } transition-all duration-500 h-full cursor-pointer`} onClick={() => {
                                        setPortfolioIndexSelected(index)
                                    }} key={index}>
                                    
                                    <figure className={`overflow-visible relative w-full h-full transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 group`}>
                                        
                                            <img src={item.img} alt={t(item.client, { ns: 'common'})} className={`transition duration-500 overflow-visible w-full object-contain ${portfolioIndexSelected == index ? 'h-[140%] absolute bottom-0 left-0' : 'h-[100%] absolute bottom-0 left-0'} `} />
                                        
                                    </figure>
                                    
                                    </div>)
                                }
                                </div>
                            </div>
                            <div className='lg:hidden block'>
                                <div className='w-full grid sm:grid-cols-1 grid-cols-1'>
                                {
                                    portfolioItems.items.sort((a: any, b: any) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item: any, index: any) => index >= 3 ? null : 
                                        <div key={index} className='h-[300px] my-4 relative sm:col-span-1 col-span-1 flex'>
                                        <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                            
                                            <img src={item.img} alt={t(item.client, { ns: 'common'})} className='w-full h-full object-cover' />
                                        
                                    </figure>
                                    </div>)
                                }
                                </div>
                            </div>
                        </div> : null
                    }
                </div>

            <div className='w-full flex content-center justify-center'>
              <Link href={'/services/portfolio'} locale={locale}>
              <div className='w-[140px]'>
              <Button textSize='text-[22px]' light={true} title={'See all'} />
              </div>
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

          <div  className='grid lg:grid-cols-3 grid-cols-1 w-full'>
            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00]  col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_mobile_development', { ns: 'common'})}</p></div>
            </motion.div>

            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00]  col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_web_development', { ns: 'common'})}</p></div>
            </motion.div>

            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00]  col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_uiux_design', { ns: 'common'})}</p></div>
            </motion.div>
          </div>

          <div className='grid lg:grid-cols-3 grid-cols-1 w-full lg:mt-10'>
            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00]  col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_shopify', { ns: 'common'})}</p></div>
            </motion.div>

            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00]  col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_blockchain', { ns: 'common'})}</p></div>
            </motion.div>

            <motion.div  className='transition duration-500 opacity-50 hover:opacity-100 hover:cursor-default hover:text-[#FAFF00] hover:border-[#FAFF00] col-span-1 lg:my-0 my-4 lg:h-[140px] h-[100px] lg:m-10 border-dashed border-[2px] border-white text-white flex content-center justify-center align-center'>
              <div className='my-auto'><p>{t('home_what_we_do_brand_identity', { ns: 'common'})}</p></div>
            </motion.div>
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

          <div className='text-center lg:px-20'>
            <h2 className='text-white lg:text-[56px] text-[24px]'>{t('blog_pre_latest_from', { ns: 'common'})} {t('blog_pre_latest_from2', { ns: 'common'})}</h2>

            <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    {
                        blog.posts.length == 0 ? <div className='lg:h-[300px] h-[100px] text-center flex justify-center items-center'>
                            <p>{t('blog_pre_null', { ns: 'common'})}</p>
                        </div> : null
                    }
                    {
                        blog.posts.length >= 1 ? <div>
                            <div className='lg:block hidden '>
                                <div className='h-[300px] text-center justify-center items-center p-0 flex'>
                                {
                                    blog.posts.sort((a: any, b: any) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item: any, index: any) => index >= 3 ? null : <div className={`lg:block hidden ${index == blogIndexSelected ? 
                                        (blog.posts.length == 1 ? 'w-full' : blog.posts.length == 2 ? 'w-[65%]' : 'w-[50%]') : 
                                        (blog.posts.length == 1 ? 'w-full' : blog.posts.length == 2 ? 'w-[35%]' : 'w-[25%]')
                                    } transition-all duration-300 h-full bg-green-200 cursor-pointer`} onClick={() => {
                                        setBlogIndexSelected(index)
                                    }} key={index}>
                                    
                                    <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter `}>
                                        
                                            <img src={item.image} alt={t(item.title, { ns: 'common'})} className='w-full h-full object-cover' />
                                        
                                        <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                        <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'common'})}</p></div>
                                        <Link href={`${item.externallink}`} target='_blank' locale={locale}>
                                          <p className={`leading-none line-clamp-2 mt-0 text-[30px] text-black drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'common'})}</p>
                                          <p className='absolute bottom-0 text-[16px] text-black transition duration-200 opacity-50'>{item.date}</p>
                                        </Link>
                                        <div></div>
                                    </figcaption>
                                    </figure>
                                    
                                    </div>)
                                }
                                </div>
                            </div>
                            <div className='lg:hidden block'>
                                <div className='w-full grid sm:grid-cols-1 grid-cols-1'>
                                {
                                    blog.posts.sort((a: any, b: any) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item: any, index: any) => index >= 3 ? null : 
                                        <div key={index} className='h-[300px] my-4 relative sm:col-span-1 col-span-1 flex'>
                                        <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                            
                                            <img src={item.image} alt={t(item.title, { ns: 'common'})} className='w-full h-full object-cover' />
                                        
                                        <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                        <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'common'})}</p></div>
                                        <Link href={`${item.externallink}`} target='_blank' locale={locale}>
                                        <p className={`leading-none line-clamp-2 mt-0 text-[30px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'common'})}</p>
                                        <p className='absolute bottom-0 text-[16px] text-black transition duration-200 opacity-50'>{item.date}</p>
                                        </Link>
                                        <div></div>
                                    </figcaption>
                                    </figure>
                                    </div>)
                                }
                                </div>
                            </div>
                        </div> : null
                    }
                </div>

            <div className='w-full flex content-center justify-center my-4'>
              <Link href='https://medium.com/ginevar-labs' target='_blank'><div className='w-[140px]'>
                <Button textSize='text-[22px]' light={true} title={'See all'} />
              </div></Link>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" async></script>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  const _blogs = await fetch('https://italinda.net/api/engineeringblog')
    const _blogData = await _blogs.json();
    const _portfolioItems = await fetch('https://italinda.net/api/portfolio')
    const _portfolioItemsData = await _portfolioItems.json();

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        blog: _blogData,
        portfolioItems: _portfolioItemsData,
        locale: locale
      },
    };
};