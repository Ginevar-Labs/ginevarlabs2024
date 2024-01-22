import { useTranslation } from 'next-i18next';
import 'flowbite';
import { useRouter } from 'next/router';
import Button from './Button';
import Link from 'next/link';
import { useState } from 'react';

export enum ServiceFlipBoxStack {
    MOBILE = 'MOBILE', SHOPIFY = 'SHOPIFY', WEB3 = 'WEB3'
}

interface ServiceFlipBoxItem {
    title: string;
    htmlItems: any[];
}

interface ServiceFlipBoxProps {
    left: ServiceFlipBoxItem;
    right: ServiceFlipBoxItem;
    techStack: ServiceFlipBoxStack
}

export default function ServiceFlipBox(props: ServiceFlipBoxProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const [techStackOpen, setTechStackOpen] = useState(false);
    const [techStackFadeIn, setTechStackFadeIn] = useState(false);
  
    return (
        <div className=' lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
        <div className=' w-full lg:h-full lg:py-0 py-10 grid lg:grid-cols-2 grid-cols-1'>
            <div className='lg:pb-20 pb-0 relative w-full h-full col-span-1 p-8 border-dashed lg:border-r-[2px] border-r-[0px] border-gray-800 p-8 transition-all duration-500 opacity-50 hover:opacity-100'>
            <h2 className='lg:text-left text-center text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[36px] text-[24px]'>{props.left.title}</h2>
            {
                props.left.htmlItems.map((item, index) => <div key={index} className='relative flex my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-4 w-[20px] h-[20px]' width="20" height="20" viewBox="0 0 70 80" fill="none">
                    <path d="M10 5C4.48438 5 0 9.48438 0 15V65C0 70.5156 4.48438 75 10 75H60C65.5156 75 70 70.5156 70 65V15C70 9.48438 65.5156 5 60 5H10ZM52.6562 32.6562L32.6562 52.6562C31.1875 54.125 28.8125 54.125 27.3594 52.6562L17.3594 42.6562C15.8906 41.1875 15.8906 38.8125 17.3594 37.3594C18.8281 35.9063 21.2031 35.8906 22.6562 37.3594L30 44.7031L47.3438 27.3438C48.8125 25.875 51.1875 25.875 52.6406 27.3438C54.0937 28.8125 54.1094 31.1875 52.6406 32.6406L52.6562 32.6562Z" fill="black"/>
                </svg>
                <div className='w-full'>
                    {item}
                </div>
            </div>)
            }

            <div className='lg:absolute lg:left-10 lg:bottom-4'>
                    <div className='w-[140px] lg:mx-0 mx-auto'>
                        <Button title={t('service_offering_box_read_more', { ns: 'common'})}/>
                    </div>
                </div>
            
            </div>
            <div className='lg:pb-20 pb-0 relative col-span-1 p-8 transition-all duration-500 opacity-50 hover:opacity-100'>
            <h2 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[36px] text-[24px]'>{props.right.title}</h2>
            {
                props.right.htmlItems.map((item, index) => <div key={index} className='relative flex my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-4 w-[20px] h-[20px]' width="20" height="20" viewBox="0 0 70 80" fill="none">
                    <path d="M10 5C4.48438 5 0 9.48438 0 15V65C0 70.5156 4.48438 75 10 75H60C65.5156 75 70 70.5156 70 65V15C70 9.48438 65.5156 5 60 5H10ZM52.6562 32.6562L32.6562 52.6562C31.1875 54.125 28.8125 54.125 27.3594 52.6562L17.3594 42.6562C15.8906 41.1875 15.8906 38.8125 17.3594 37.3594C18.8281 35.9063 21.2031 35.8906 22.6562 37.3594L30 44.7031L47.3438 27.3438C48.8125 25.875 51.1875 25.875 52.6406 27.3438C54.0937 28.8125 54.1094 31.1875 52.6406 32.6406L52.6562 32.6562Z" fill="black"/>
                </svg>
                <div className='w-full'>
                    {item}
                </div>
            </div>)
            }


            <div className='lg:absolute lg:left-10 lg:bottom-4'>
                    <div className='w-[140px] lg:mx-0 mx-auto'>
                    <Button title={t('service_offering_box_read_more', { ns: 'common'})}/>
                </div>
            </div>
            </div>
        </div>

        <div onClick={() => {
            setTechStackOpen(true)
            setTimeout(() => {
                if(techStackFadeIn == false) {
                    setTechStackFadeIn(true)
                }
            }, 500);
        }} className={`lg:block hidden ${techStackFadeIn == true ? '' : 'cursor-pointer'} transition-all duration-500 absolute top-0 right-0 border-dashed border-gray-800 ${techStackOpen ? 'w-full h-full bg-[#FAF9E4] border-b-[0px] border-l-[0px] ' : 'py-2 hover:py-3 border-b-[2px] border-l-[2px] bg-transparent hover:bg-[#FAF9E4] h-[50px] w-[160px] hover:w-[200px]'} text-center`}>
            <p className={`font-[16px] transition-all duration-500 ${techStackOpen == true ? 'opacity-0' : 'opacity-100'} ${techStackOpen == true ? 'hidden' : 'block'}`}>{t('service_offering_box_tech_stack', { ns: 'common'})}</p>
            {
                    props.techStack == ServiceFlipBoxStack.MOBILE ? <div className={`relative w-full h-full transition-all duration-500 ${techStackOpen == true ? 'block' : 'hidden' } ${techStackFadeIn == true ? 'opacity-1 ' : 'opacity-0'}`}>
                <div className='relative w-full h-[50%] grid grid-cols-2'>
                    <div className='relative h-full w-full col-span-1'>
                        <div className='w-full h-[30%] border-dashed border-b-[2px] border-r-[2px] border-gray-800'>
                            <div className='w-full col-span-1 text-left py-0 px-8'> <p className='text-[#78A6FF] text-[44px]'>{t('service_offering_box_mobile_native', { ns: 'common'})}</p> </div>
                        </div>
                        <div className='w-full h-[70%] border-dashed border-r-[2px] border-gray-800 flex justify-center items-center '>
                        <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_swift.png' alt='Swift' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_kotlin.png' alt='Kotlin' className=''/></div>
                        </div>
                    </div>
                    <div className='w-full col-span-1'>
                        <div className='w-full h-[30%] border-dashed border-b-[2px] border-gray-800'>
                        <div className='w-full col-span-1 text-left py-0 px-8'> <p className='text-[#78A6FF] text-[44px]'>{t('service_offering_box_mobile_cross_platform', { ns: 'common' })}</p> </div>
                        </div>
                        <div className='w-full h-[70%] flex justify-center items-center '>
                        <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_flutter.png' alt='Flutter' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_reactnative.png' alt='React Native' className=''/></div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[50%] relative border-dashed border-t-[2px] border-gray-800'>
                    <div className='relative w-[60%] h-full mx-[20%] flex justify-center items-center'>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_nodejs.png' alt='Node.js' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_react.png' alt='React.js' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_mongodb.png' alt='MongoDB' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_sketch.png' alt='Sketch' className=''/></div>
                    </div>
                </div>

                <div className='w-full h-[50%] grid col-cols-1'>
                    <div className='col-span-1'></div>
                </div>
                <div onClick={(e) => {
                    e.preventDefault();
                    setTechStackFadeIn(false);
                    setTimeout(() => {
                        setTechStackOpen(false)
                    }, 500);
                }} className='cursor-pointer absolute transition-all duration-500 hover:bg-[#FAF9E4] top-0 right-0 w-[160px] hover:w-[200px] py-2 h-[50px] border-dashed border-b-[2px] border-l-[2px] border-gray-800'><p>{t('service_offering_box_close', { ns: 'common'})}</p></div>
            </div> : null
            }

{
                    props.techStack == ServiceFlipBoxStack.SHOPIFY ? <div className={`relative w-full h-full transition-all duration-500 ${techStackOpen == true ? 'block' : 'hidden' } ${techStackFadeIn == true ? 'opacity-1 ' : 'opacity-0'}`}>
                <div className='w-full h-[100%] relative'>
                    <div className='relative w-[60%] h-full mx-[20%] flex justify-center items-center'>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_react.png' alt='React.js' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_shopify.png' alt='Shopify' className=''/></div>
                            <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_woo.png' alt='WooCommerce' className=''/></div>
                    </div>
                </div>

                <div className='w-full h-[50%] grid col-cols-1'>
                    <div className='col-span-1'></div>
                </div>
                <div onClick={(e) => {
                    e.preventDefault();
                    setTechStackFadeIn(false);
                    setTimeout(() => {
                        setTechStackOpen(false)
                    }, 500);
                }} className='cursor-pointer absolute transition-all duration-500 hover:bg-[#FAF9E4] top-0 right-0 w-[160px] hover:w-[200px] py-2 h-[50px] border-dashed border-b-[2px] border-l-[2px] border-gray-800'><p>{t('service_offering_box_close', { ns: 'common'})}</p></div>
            </div> : null
            }

{
                    props.techStack == ServiceFlipBoxStack.WEB3 ? <div className={`relative w-full h-full transition-all duration-500 ${techStackOpen == true ? 'block' : 'hidden' } ${techStackFadeIn == true ? 'opacity-1 ' : 'opacity-0'}`}>
                <div className='w-full h-[50%] relative'>
                    <div className='relative w-[60%] h-full mx-[20%] flex justify-center items-center'>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_solidity.png' alt='Solidity' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_eth.png' alt='Ethereum' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_nodejs.png' alt='Node.js' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_remix.png' alt='Remix' className=''/></div>
                    </div>
                    
                </div>
                <div className='w-full h-[50%] relative'>
                    <div className='relative w-[60%] h-full mx-[20%] flex justify-center items-center'>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_react.png' alt='React.js' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_ipfs.png' alt='IPFS' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_truffle.png' alt='Truffle' className=''/></div>
                    <div className='w-[25%] px-3 transition-all duration-500 opacity-50 hover:opacity-100'><img src='/assets/icons/techstack/icon_python.png' alt='Python' className=''/></div>
                    </div>
                    
                </div>

                <div className='w-full h-[50%] grid col-cols-1'>
                    <div className='col-span-1'></div>
                </div>
                <div onClick={(e) => {
                    e.preventDefault();
                    setTechStackFadeIn(false);
                    setTimeout(() => {
                        setTechStackOpen(false)
                    }, 500);
                }} className='cursor-pointer absolute transition-all duration-500 hover:bg-[#FAF9E4] top-0 right-0 w-[160px] hover:w-[200px] py-2 h-[50px] border-dashed border-b-[2px] border-l-[2px] border-gray-800'><p>{t('service_offering_box_close', { ns: 'common'})}</p></div>
            </div> : null
            }
                
        </div>
    

        <div className='lg:hidden block relative w-full'>
            <div onClick={() => {
                setTechStackFadeIn(!techStackFadeIn);
            }} className='relative w-full border-dashed border-[2px] border-gray-800 px-4 py-1 flex grid grid-cols-2 place-content-between'>
                <div className='col-span-1'>
                <p>{t('service_offering_box_tech_stack', { ns: 'common'})}</p>
                </div>
                <div className='col-span-1 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" className={`absolute right-0 mt-1 transition-all duration-200 ${techStackFadeIn ? '-rotate-180' : ''}`} width="20" height="20" viewBox="0 0 60 60" fill="none">
                    <path d="M27.3516 47.6484C28.8164 49.1133 31.1953 49.1133 32.6602 47.6484L55.1602 25.1484C56.625 23.6836 56.625 21.3047 55.1602 19.8398C53.6953 18.375 51.3164 18.375 49.8516 19.8398L30 39.6914L10.1484 19.8516C8.68359 18.3867 6.30469 18.3867 4.83984 19.8516C3.375 21.3164 3.375 23.6953 4.83984 25.1602L27.3398 47.6602L27.3516 47.6484Z" fill="black"/>
                </svg>
                </div>
            </div>
            <div className={`relative inline-block transition-all duration-500 ${techStackFadeIn ? 'h-full' : 'pt-6 h-[20px]'} w-full border-dashed border-l-[2px] border-r-[2px] border-b-[2px] border-gray-800 px-2 overflow-hidden`}>
                {
                    props.techStack == ServiceFlipBoxStack.MOBILE ? <div className={` transition-all duration-500 ${techStackFadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='text-[#78A6FF] text-[32px]'>{t('service_offering_box_mobile_native', { ns: 'common'})}</p>
                    <div className='flex'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Swift' src='/assets/icons/techstack/icon_swift.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Kotlin' src='/assets/icons/techstack/icon_kotlin.png'/>
                        </div>
                    </div>
                    <p className='text-[#78A6FF] text-[32px]'>{t('service_offering_box_mobile_cross_platform', { ns: 'common'})}</p>
                    <div className='flex'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Flutter' src='/assets/icons/techstack/icon_flutter.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='React Native' src='/assets/icons/techstack/icon_reactnative.png'/>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Node.js' src='/assets/icons/techstack/icon_nodejs.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='React.js' src='/assets/icons/techstack/icon_react.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Node.js' src='/assets/icons/techstack/icon_mongodb.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='React.js' src='/assets/icons/techstack/icon_sketch.png'/>
                        </div>
                    </div>
                </div> : null
                }
                {
                    props.techStack == ServiceFlipBoxStack.SHOPIFY ? <div className={` transition-all duration-500 ${techStackFadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    
                    <div className='flex items-center justify-center'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='React.js' src='/assets/icons/techstack/icon_react.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Shopify' src='/assets/icons/techstack/icon_shopify.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='WooCommerce' src='/assets/icons/techstack/icon_woo.png'/>
                        </div>
                    </div>
                </div> : null
                }
                {
                    props.techStack == ServiceFlipBoxStack.WEB3 ? <div className={` transition-all duration-500 ${techStackFadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    
                    <div className='flex items-center justify-center'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Solidity' src='/assets/icons/techstack/icon_solidity.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Ethereum' src='/assets/icons/techstack/icon_eth.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Node.js' src='/assets/icons/techstack/icon_nodejs.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Remix' src='/assets/icons/techstack/icon_remix.png'/>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='React.js' src='/assets/icons/techstack/icon_react.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='IPFS' src='/assets/icons/techstack/icon_ipfs.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Truffle' src='/assets/icons/techstack/icon_truffle.png'/>
                        </div>
                        <div className='w-[50px] h-[50px] m-2'>
                            <img className='w-full h-full transition duration-200 opacity-50 hover:opacity-100' alt='Python' src='/assets/icons/techstack/icon_python.png'/>
                        </div>
                    </div>
                </div> : null
                }
            </div>
        </div>
    </div>
    )
  }