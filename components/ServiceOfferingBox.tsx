import { useTranslation } from 'next-i18next';
import 'flowbite';
import { useRouter } from 'next/router';
import Button from './Button';
import Link from 'next/link';
import ServiceFlipBox, { ServiceFlipBoxStack } from './ServiceFlipBox';

export default function ServiceOfferingBox() {
    const { t } = useTranslation();
    const router = useRouter();

  
    return (
      <div id='services' className='lg:px-20 px-10 my-10 w-full '>
        <div className='w-full fontedBebas lg:text-left text-center'>
            <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>Tailored Solutions</h1>
        </div>
        <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#9DC79C] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#82A5F8'
                    }}>Mobile Studio</h2>
                </div>
                <ServiceFlipBox left={{
                    title: 'Mobile App Pack',
                    htmlItems: [
                        <p className='text-[16px]'><span className='text-[#EE807C]'>UI/UX Designers</span> to elaborate a brand design, stylesheet and company guidelines</p>,
                        <p className='text-[16px]'>Full <span className='text-[#EE80B7]'>Development</span> Cycle</p>,
                        <p className='text-[16px]'>Monthly <span className='text-[#B7C656]'>Updates</span> at a below-the-market cost</p>,
                        <p className='text-[16px]'>Includes<span className='text-[#9DC79C]'> landing page</span></p>,
                        <p className='text-[16px]'>Includes<span className='text-[#82A5F8]'> BackEnd </span>development</p>
                    ]
                }} right={{
                    title: 'Staff Augmentation',
                    htmlItems: [
                        <p className='text-[16px]'>Cross platform mobile developers with <u className='text-[#EE807C]'>Flutter</u> and <u className='text-[#747473]'>React Native</u> skills</p>,
                        <p className='text-[16px]'>Top-Notch native developers with a skillset of <u className='text-[#9DC79C]'>Swift+Objective C</u> for iOS and <u className='text-[#9DC79C]'>Kotlin</u> for Android</p>,
                        <p className='text-[16px]'><span className='text-[#EE80B7]'>Remote resources</span> to assist your projects: Designers, FrontEnd and BackEnd developers</p>,
                        <p className='text-[16px]'><u>Daily</u> and <u>Monthly</u> plans</p>
                    ]
                }} 
                    techStack={ServiceFlipBoxStack.MOBILE}
                />
        </div>
      </div>
    )
  }