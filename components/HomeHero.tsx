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
        <div className='w-full grid lg:grid-cols-5 grid-cols-3 h-[800px]'>
            <div className='lg:col-span-2 lg:block hidden col-span-0 h-[600px] flex items-center justify-center text-center'>
                <img src='/assets/ginevar_logo_dark.png' className='transition duration-500 opacity-25 hover:opacity-100'></img>
            </div>
            <div className='col-span-3 h-[800px] w-full'>
                <div className='fontedBebas transition-all duration-500 opacity-50 hover:opacity-100'>
                    <h2>Native & Cross Platform</h2>
                    <div className='relative w-full grid lg:grid-cols-6 grid-cols-1 lg:h-[200px]'>
                        <div className='col-span-1 lg:leading-[100px] leading-[60px]'>
                            <h2 className='opacity-75 lg:text-[72px] text-[56px] drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-[#FF7878]'>Mobile</span><br/><span className='text-[#B3C73E]'>Apps</span></h2>
                        </div>
                        <div className='lg:col-span-3 col-span-1 w-full mt-4' style={{letterSpacing: '10px'}}>
                            <div className='w-full text-[#FF78B9] text-right pr-0 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Design</div>
                            <div className='w-full text-[#78A6FF] text-right pr-4 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Creation</div>
                            <div className='w-full text-[#6E6E6E] text-right pr-8 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>QA-Testing</div>
                            <div className='w-full text-[#8BC694] text-right pr-12 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Launching</div>
                            <div className='w-full text-[#FF78B9] text-right pr-16 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Maintenance</div>
                        </div>
                        <div className='lg:col-span-2 lg:relative absolute w-full h-full flex lg:justify-end justify-start lg:items-end items-end lg:pb-4 pb-10 pr-10 lg:opacity-50 opacity-75 mb-4'>
                            <img src='/assets/icons/icon-mobile-apps.png' className='h-[140px]' />
                        </div>
                    </div>
                </div>
                <div className='fontedBebas transition-all duration-500 opacity-50 hover:opacity-100 border-dashed border-t-[2px] border-gray-800'>
                    <h2>UI/UX Design</h2>
                    <div className='relative w-full grid lg:grid-cols-6 grid-cols-1 lg:h-[200px]'>
                        <div className='col-span-2 lg:leading-[100px] leading-[60px]'>
                            <h2 className='opacity-75 lg:text-[72px] text-[56px]  drop-shadow-[4px_4px_rgba(255,242,56,1)]' style={{letterSpacing: '20px'}}><span className='text-[#8BC694]'>Mobile</span><br/><span className='text-[#6E6E6E]'>Oriented</span></h2>
                        </div>
                        <div className='lg:col-span-3 col-span-1 w-full mt-4 text-[24px] leading-[40px] mt-[40px]' style={{letterSpacing: '10px'}}>
                            <div className='w-full text-[#FF78B9] text-right pr-0 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Wireframes</div>
                            <div className='w-full text-[#78A6FF] text-right pr-4 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Brand Identity</div>
                            <div className='w-full text-[#6E6E6E] text-right pr-0 transition-all duration-500 lg:opacity-25 opacity-75 hover:opacity-100'>Prototyping</div>
                        </div>
                        <div className='lg:col-span-1 lg:relative absolute lg:w-full w-[100px] h-full flex lg:justify-end justify-start lg:items-start items-end lg:pb-4 pb-10 pr-10 lg:opacity-50 opacity-75 mb-4 lg:bottom-0 bottom-10'>
                            <img src='/assets/icons/icon-ui.png' className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }