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

export default function Home({ blog, locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header currentPage='blog' locale={locale}/>
      <main
        className={`flex min-h-screen flex-col`}
      >
        <div id='home' className='my-10 w-full '>
            <div className='w-full lg:px-40 px-10 fontedBebas lg:text-left text-center'>
                <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>{t('main_menu_item_blog_full', { ns: 'common'})}</h1>
            </div>

            <CommonMarquee text={t('engineering_blog_latest_articles', { ns: 'common'})}/>

            {
                blog.posts.map((item: any, index: any) =>  <div key={index} onClick={(e) => {
                    e.preventDefault();
                    router.push(`/blog/${item.url}`, undefined, { locale: locale});
                }} className='grid lg:grid-cols-2 grid-cols-1 lg:mx-40 mx-10 my-12 transition-all duration-500 opacity-50 hover:opacity-100 cursor-pointer'>
                    <div className='col-span-1'>
                        <img src={item.image} className='h-[250px] w-full object-cover'/>
                    </div>

                    <div className='col-span-1 fontedBebas px-10 py-0 border-dashed lg:border-t-[2px] border-t-[0px] lg:border-l-[0px] border-l-[2px] border-b-[2px] border-r-[2px] border-gray-800 py-4'>
                        <div className='flex'>
                        <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'eb'})}</p>
                        </div>
                            <p className={`leading-none line-clamp-2 mt-0 text-[30px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'eb'})}</p>
                            <p className='text-[16px] text-black transition duration-200 opacity-50'>{item.date}</p>
                    </div>
            </div>)
            }

           

            <div className='lg:px-40 px-10 my-12'>
                
                
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
      locale: locale
    },
  };
};