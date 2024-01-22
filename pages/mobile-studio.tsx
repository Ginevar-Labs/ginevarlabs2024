import CommonMarquee from '@/components/CommonMarquee';
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
import { useEffect } from 'react';

export default function Home({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  return (
    <>
      <Header currentPage='mobilestudio'/>
      <main
        className={`flex min-h-screen flex-col`}
      >
        <div id='home' className='my-10 w-full '>
            <div className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>Mobile Studio</h1>
            </div>

            <CommonMarquee text='Full Cycle'/>

            <div className='lg:px-40 px-10 my-12'>
                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#82A5F8]'>Consultation</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                        We learn about your <u>company</u>, your <u>values</u> and your <u>product</u>. We do a <span className=' text-[#82A5F8]'>deep research</span> on your <b className='text-black'>niche</b>, your <b className='text-black'>target audience</b> and your <b className='text-black'>competition</b>
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    to have a better understanding on the value being added. 
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    This step is free, and we will prepare a proposal with the analysis done and budget/time estimations. Our projects typically fall between the 2-5 months and are priced between 7500 and 25000 EUR.
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#9DC79C]'>Prototyping</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                    We design a <span className='text-[#9DC79C]'>brand identity</span> for your product, a <span className='text-[#9DC79C]'>stylesheet</span> for <u>colours</u>, <u>logos</u> and <u>fonts</u>, continued by the <span className='text-black'>wireframe prototyping</span>.
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    After a validation from the client, we proceed to design the final application views and flow.
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#747473]'>Building</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    After the <u>client approval</u> on the design, our developers start working on your app following a <span className='text-black'>schedule</span> shared with the client. 
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    The Schedule will be composed of <span className='text-black'>stages</span>, in which you will be able to check the current process.
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#EE807C]'>Testing</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    Next step is testing the app in the <span className='text-[#EE807C]'>most used devices</span> and on <span className='text-[#EE807C]'>different environments</span>. we aim for a <span className='text-black'>clean launch</span> where there is no space for surprise bugs.
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    We also use this phase to apply the <u><span className='text-black'>last changes asked by the client</span></u>, understanding that even days before launch there could be a crucial marketing directive
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#EE80B7]'>Launch</span></div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    Launching an app includes <span className='text-[#EE80B7]'>filling app details</span>, getting <span className='text-[#EE80B7]'>assets ready</span>, and <span className='text-[#EE80B7]'>pushing to stores</span>. Google (and mostly <span className='text-black'>apple</span>) can ask for <u>code changes</u> to keep up with
                    </div>
                    <div className='lg:col-span-4 col-span-1 text-[#7D7D72]'>
                    the <span className='text-black'>latest standards</span> according to each market, and we need to be <u>fast</u> and <u>reactive</u> to get to the <span className='text-black'>launch date safe and sound</span>.
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 fontedBebas text-justify my-12'>
                    <div className='col-span-1 pt-2'><span className='leading-[60px] lg:text-[68px] text-[46px] text-[#B7C656]'>Maintenance</span></div>
                    <div className='lg:col-span-2 col-span-1 text-[#7D7D72]'>
                    Updating an app is rather different than a website. we handle that process offering <span className='text-black'>updates</span> (not only <span className='text-[#B7C656]'>changes</span> but <span className='text-[#B7C656]'>new</span>
                    </div>
                    <div className='lg:col-span-3 col-span-1 text-[#7D7D72]'>
                    <span className='text-[#B7C656]'>implementations/redesigns</span>) in a <u>monthly basis</u>, giving access to both <span className='text-black'>design</span> and <span className='text-black'>code</span>.
                    </div>
                </div>
                
            </div>

            <CommonMarquee text='Extra Services'/>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#EE80B7] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#7D7D72'
                    }}>Landing Pages</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>A landing page typically hosts <u>marketing information</u> of the App, screenshots, reviews and <u>links</u> for downloading on each store, as well as terms and conditions. It also adds SEO capability in order to <span className='text-black'>maximize your public</span>.</p>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#78A6FF] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#EE807C'
                    }}>Backend</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>Developing and hosting a backend is a must when dealing with account creation, content on demand, email handling and <u>network-oriented features</u>. <span className='text-black'>We take care of it</span> using Node.js, managing databases with PostgreSQL/MongoDB, and hosting it on the cloud at a provider <span className='text-black'>of your choice</span>.</p>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0 my-6'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#B3C73E] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#82A5F8'
                    }}>Deployment</h2>
                </div>
                <div className='lg:px-20 px-10 lg:text-center text-justify flex items-center justify-center lg:mb-0 relative lg:col-span-5 col-span-1 w-full min-h-[400px] fontedBebas text-left border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    <p className='transition-all duration-500 text-[#7D7D72]'>We understand the importance of the deployment phase, from <span className='text-black'>submitting store-compliant information</span>, <span className='text-black'>handling stores feedback</span> on the development, and organizing a <span className='text-black'><u>soft and synchronized launch</u></span>. We will be <u>online with you at launch</u> as well, so we can handle any unexpected behaviour within the app.</p>
                </div>
            </div>

            <CommonMarquee text='Use Cases'/>

        </div>
        
        <ContactBox/>
      </main>
      <Footer currentPage='mobilestudio'/>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  const _blogs = await fetch('http://localhost:3000/api/engineeringblog')
  const _blogData = await _blogs.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'eb'])),
      blog: _blogData
    },
  };
};