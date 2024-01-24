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
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';

export default function Home({ blog, locale, faq }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='aboutus' locale={locale}/>
      <main
        className={`flex min-h-screen flex-col`}
      >
        <div id='home' className='my-10 w-full '>
            <div id='ourteam' className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>About us</h1>
            </div>

            <CommonMarquee text='Our team'/>
            <div className='grid lg:grid-cols-6 grid-cols-5 w-full lg:px-40 px-0 fontedBebas my-0 lg:mb-0 mb-10'>
                <div className='col-span-5 text-justify px-10'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className='lg:col-span-1 col-span-0 lg:block hidden'>
                    <img src='/assets/ginevar_logo_dark.png' className='transition duration-500 opacity-25 hover:opacity-100'></img>
                </div>
            </div>

            <div className='grid lg:grid-cols-6 grid-cols-2 w-full lg:px-40 px-0 fontedBebas my-0'>
                <div className='col-span-2 text-justify px-10'>
                    <div className='border-dashed border-[2px] border-gray-800 aspect-square'>

                    </div>
                    <p className=' text-center'>Juan M. Curti</p>
                    <p className=' text-center'>Chief Algo Officer</p>
                    <div className='flex lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                    </div>
                </div>
                <div className='col-span-2 text-justify px-10'>
                    <div className='border-dashed border-[2px] border-gray-800 aspect-square'>

                    </div>
                    <p className=' text-center'>Juan M. Curti</p>
                    <p className=' text-center'>Chief Algo Officer</p>
                    <div className='flex lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                    </div>
                </div>
                <div className='col-span-2 text-justify px-10'>
                    <div className='border-dashed border-[2px] border-gray-800 aspect-square'>

                    </div>
                    <p className=' text-center'>Juan M. Curti</p>
                    <p className=' text-center'>Chief Algo Officer</p>
                    <div className='flex lg:my-0 my-6'>
                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-li' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://www.linkedin.com/company/ginevar" className='w-full'><i className="fab fa-linkedin linkedin flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full lg:ml-[-4px] ml-0'>LinkedIn</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-md' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://medium.com/ginevar-labs" className='w-full'><i className="fab fa-medium medium flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Medium</span></div></Link></li>
                                    </ul>
                                    <ul id='comunidad-bts' className='w-full h-full lg:scale-50 scale-50]'>
                                        <li id='cbts-github' className='my-0 w-full transition-all duration-500 opacity-25 hover:opacity-100'><Link  href="https://github.com/Ginevar-Labs" className='w-full'><i className="fab fa-github github flex justify-center" ></i> <div className='text-black font-bold w-full text-center' style={{fontSize: '24px'}}><span className='text-center w-full'>Github</span></div></Link></li>
                                    </ul>
                    </div>
                </div>
            </div>

            <CommonMarquee text='FAQ'/>


            <div id='faq' className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>FAQ</h1>
            </div>

            <div className='lg:px-40 px-10'>
                {
                    faq.map((item: any, index) => <div key={index} className='relative w-full fontedBebas transition-all duration-500'>
                        <FAQItem question={item.q} answer={item.a} />
                    </div>)
                }
            </div>

            <CommonMarquee text='Careers'/>
            <div id='faq' className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>Careers</h1>
            </div>
        </div>
        
        <ContactBox locale={locale}/>
      </main>
      <Footer currentPage='mobilestudio' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
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
      blog: _blogData,
      locale: locale,
      faq: [
        {
            q: 'Question 1 about something we should clarify',
            a: 'This is an answer to a question. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet.'
        },

        {
            q: 'Question 2 about something we should clarify',
            a: 'This is another answer to a question. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet.'
        },

        {
            q: 'Question 3 about something we should clarify',
            a: 'This is yet another answer to a question. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet. Pure text, no images. Lorem ipsum dolor sit amet.'
        }
      ]
    },
  };
};