import Button from '@/components/Button';
import CommonMarquee from '@/components/CommonMarquee';
import ContactBox from '@/components/ContactBox';
import EngineeringBlogBox from '@/components/EngineeringBlogBox';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fs from 'node:fs';
import path from 'node:path';
import 'flowbite';
import { initFlowbite } from 'flowbite';

export default function Home({ post, markdown, locale }: any) {
  const { t } = useTranslation();

  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <Header subtitle={t(post.title, { ns: 'eb'})} currentPage='blog' locale={locale}/>
      <main
        className={`flex min-h-screen flex-col`}
      >
        <div id='home' className='my-10 w-full '>
            <div className='lg:px-40 px-10 my-12'>
            <div onClick={(e) => {
                }} className='grid grid-cols-1 lg:mx-40 mx-0 my-12 transition-all duration-500'>
                    <div className='col-span-1'>
                        <img src={post.image} className='h-[300px] w-full object-cover'/>
                    </div>

                    <div className='col-span-1 fontedBebas px-10 py-0 border-dashed border-[2px] border-gray-800 py-4'>
                        <div className='flex'>
                        <img src={post.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(post.category.title, {ns: 'eb'})}</p>
                        </div>
                            <p className={`leading-none mt-0 text-[30px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(post.title, {ns: 'eb'})}</p>
                            <p className='text-[16px] text-black transition duration-200 opacity-50'>{post.date}</p>
                            <Link href={post.externallink} locale={locale}>{t('eng_blog_external_link', { ns: 'common'})}</Link>
                    </div>
            </div>
            </div>

            <ReactMarkdown remarkPlugins={[remarkGfm]} className="lg:mx-40 mx-10 fontedBebas text-black dark:text-black my-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 markdown text-justify" components={{
                h1: ({node, ...props}) => <h2 className="mb-4 text-2xl font-extrabold tracking-none leading-none text-gray-900 md:text-3xl lg:text-4xl sm:px-16" {...props} />,
                h3: ({node, ...props}) => <h3 className="mb-4 text-2xl font-extrabold tracking-none leading-none text-gray-900 md:text-3xl lg:text-4xl sm:px-16" {...props} />,
                h2: ({node, ...props}) => <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 " {...props} />,
                img: ({node, ...props}) => <img width={2432} height={1442} alt="Ginevar" className="w-[48rem] max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 md:block" {...props} />,
                p: ({node, ...props}) => <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 " {...props} />,
                li: ({node, ...props}) => <li className="my-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 " {...props} />,
                em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
              }}>{markdown}</ReactMarkdown>

        <div className='flex flex-start lg:px-40 px-20 my-10 fontedBebas'>
                <Link href='/blog' locale={locale}><Button title={t('eng_blog_back', { ns: 'common'})}/></Link>
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
  const { locale, query } = context;
  const _blogs = await fetch('http://localhost:3000/api/engineeringblog')
  const _blogData = await _blogs.json();

  let _post = _blogData.posts.filter((p: any) => p.url == query.id)

        if(_post.length == 0) { 
            return {
                redirect: {
                  permanent: false,
                  destination: "/blog",
                  locale: locale
                },
                props:{},
              };
         }else{

            const markdownFilePath = path.join(process.cwd(), 'public', 'blogfiles', _post[0].content+'-'+locale+'.md');
            try{
                const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
                return {
                props: {
                    ...(await serverSideTranslations(locale, ['common', 'eb'])),
                    post: _post[0],
                    markdown: markdownContent,
                    locale: locale
                },
                };
            }catch(e){
                console.log(e);
                return {
                    redirect: {
                      permanent: false,
                      destination: "/blog",
                      locale: locale
                    },
                    props:{},
                  };
            }
         }

};