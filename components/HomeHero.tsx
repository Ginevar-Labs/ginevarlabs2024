import { useTranslation } from 'next-i18next';
import 'flowbite';
import { useRouter } from 'next/router';
import Button from './Button';
import Link from 'next/link';
import ServiceFlipBox, { ServiceFlipBoxStack } from './ServiceFlipBox';

export default function HomeHero() {
    const { t } = useTranslation();
    const router = useRouter();

  
    return (
      <div id='hero' className='lg:px-40 px-10 my-10 w-full '>
        <div className='w-full grid lg:grid-cols-5 grid-cols-3 lg:h-[500px]'>
            <div className='lg:col-span-2 lg:block hidden col-span-0 h-[600px] flex items-center justify-center text-center'>
                <img src='/assets/ginevar_logo_dark.png' className='transition duration-500 opacity-25 hover:opacity-100'></img>
            </div>
            <div className='col-span-3 lg:h-[500px] w-full'>
                <div className='fontedBebas transition-all duration-500 opacity-50 hover:opacity-100'>
                    <h2>{t('home_hero_native_cross', { ns: 'common'})}</h2>
                    <div className='relative w-full grid lg:grid-cols-6 grid-cols-1 lg:h-[200px]'>
                        <div className='col-span-1 lg:leading-[100px] leading-[60px]'>
                            <h2 className='opacity-75 lg:text-[72px] text-[56px] drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-[#FF7878]'>{t('home_hero_mobile_apps_part_a', { ns: 'common'})}</span><br/><span className='text-[#B3C73E]'>{t('home_hero_mobile_apps_part_b', { ns: 'common'})}</span></h2>
                        </div>
                        <div className='lg:col-span-3 col-span-1 w-full mt-4' style={{letterSpacing: '10px'}}>
                            <div className='w-full text-[#FF78B9] text-right pr-0 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_apps_design', { ns: 'common'})}</div>
                            <div className='w-full text-[#78A6FF] text-right pr-4 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_apps_creation', { ns: 'common'})}</div>
                            <div className='w-full text-[#6E6E6E] text-right pr-8 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_apps_qaTesting', { ns: 'common'})}</div>
                            <div className='w-full text-[#8BC694] text-right pr-12 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_apps_launching', { ns: 'common'})}</div>
                            <div className='w-full text-[#FF78B9] text-right pr-16 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_apps_maintenance', { ns: 'common'})}</div>
                        </div>
                        <div className='lg:col-span-2 lg:relative absolute w-full h-full flex lg:justify-end justify-start lg:items-end items-end lg:pb-4 pb-10 pr-10 lg:opacity-50 opacity-75 mb-4'>
                            <img src='/assets/icons/icon-mobile-apps.png' className='h-[140px]' />
                        </div>
                    </div>
                </div>
                <div className='fontedBebas transition-all duration-500 opacity-50 hover:opacity-100 border-dashed border-t-[2px] border-gray-800'>
                    <h2>{t('home_hero_uxui_design', { ns: 'common'})}</h2>
                    <div className='relative w-full grid lg:grid-cols-6 grid-cols-1 lg:h-[200px]'>
                        <div className='col-span-2 lg:leading-[100px] leading-[60px]'>
                            <h2 className='opacity-75 lg:text-[72px] text-[56px]  drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-[#8BC694]'>{t('home_hero_mobile_oriented_part_a', { ns: 'common'})}</span><br/><span className='text-[#6E6E6E]'>{t('home_hero_mobile_oriented_part_b', { ns: 'common'})}</span></h2>
                        </div>
                        <div className='lg:col-span-3 col-span-1 w-full mt-4 text-[24px] leading-[40px] mt-[40px]' style={{letterSpacing: '10px'}}>
                            <div className='w-full text-[#FF78B9] text-right pr-0 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_oriented_wireframes', { ns: 'common'})}</div>
                            <div className='w-full text-[#78A6FF] text-right pr-4 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_oriented_brandidentity', { ns: 'common'})}</div>
                            <div className='w-full text-[#6E6E6E] text-right pr-0 transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'>{t('home_hero_mobile_oriented_prototyping', { ns: 'common'})}</div>
                        </div>
                        <div className='lg:col-span-1 lg:relative absolute lg:w-full w-[100px] h-full flex lg:justify-end justify-start lg:items-start items-end lg:pb-4 pb-10 pr-10 lg:opacity-50 opacity-75 mb-4 lg:bottom-0 bottom-10'>
                            <img src='/assets/icons/icon-ui.png' className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='fontedBebas w-full grid lg:grid-cols-2 grid-cols-1 lg:h-[300px] border-dashed border-t-[2px] border-gray-800'>
            <div className='relative col-span-1 border-dashed lg:border-r-[2px] border-gray-800 transition-all duration-500 opacity-50 hover:opacity-100'>
                <h2>{t('home_hero_e_commerce', { ns: 'common'})}</h2>
                <h2 className='lg:leading-[100px] leading-[60px] opacity-75 lg:text-[72px] text-[56px] drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-black'>{t('home_hero_e_commerce_shopify', { ns: 'common'})}</span></h2>
                <div className='w-full text-[#FF78B9] text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'><span className='text-[#78A6FF]'>{t('home_hero_e_commerce_template_design_part_a', { ns: 'common'})}</span> <span className=''>{t('home_hero_e_commerce_template_design_part_b', { ns: 'common'})}</span></div>
                <div className='w-full text-[#FF78B9] text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'> <span className='text-[#8BC694]'>{t('home_hero_e_commerce_marketplaces', { ns: 'common'})}</span></div>
                <div className='w-full text-[#FF78B9] text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'> <span className='text-[#FF7878]'>{t('home_hero_e_commerce_shopify_apps', { ns: 'common'})}</span></div>
                <img src='/assets/icons/icon-shopify.png' className='absolute lg:h-[100px] h-[50px] lg:right-10 right-0 lg:top-20 top-24' alt='Shopify' />
            </div>
            <div className='relative col-span-1 border-dashed lg:border-t-[0px] border-t-[2px] border-gray-800 lg:text-right text-left transition-all duration-500 opacity-50 hover:opacity-100'>
                <h2>Blockchain</h2>
                <h2 className='lg:leading-[100px] leading-[60px] opacity-75 lg:text-[72px] text-[56px] drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-black'>NFT</span></h2>
                <div className='w-full text-[#FF78B9] lg:text-right text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'><span className='text-[#8BC694]'>Smart</span> <span className='text-[#78A6FF]'>Contracts</span></div>
                <div className='w-full text-[#FF78B9] lg:text-right text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'> <span className='text-[#FF7878]'>{t('home_hero_e_commerce_shopify_web_development_part_a', { ns: 'common'})}</span> <span className='text-[#FF78B9]'>{t('home_hero_e_commerce_shopify_web_development_part_b', { ns: 'common'})}</span></div>
                <div className='w-full text-[#FF78B9] lg:text-right text-left transition-all duration-500 lg:opacity-50 opacity-75 hover:opacity-100'> <span className='text-[#B3C73E]'>{t('home_hero_e_commerce_shopify_nft_gen_part_a', { ns: 'common'})}</span> <span className='text-black]'>{t('home_hero_e_commerce_shopify_nft_gen_part_b', { ns: 'common'})}</span></div>
                <img src='/assets/icons/icon-blockchain.png' className='absolute lg:h-[100px] h-[50px] lg:left-10 left-60 top-20' alt='Blockchain' />
            </div>
        </div>
      </div>
    )
  }