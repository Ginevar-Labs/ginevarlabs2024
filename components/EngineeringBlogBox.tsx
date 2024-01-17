import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from './Button';

interface EngineeringBlogBoxProps {
    categories: any[]
    posts: any[]
}

export default function EngineeringBlogBox(props: EngineeringBlogBoxProps) {
    const { t } = useTranslation();
  
    return (
        <div id='blog' className='my-10'>
            <div className='grid sm:grid-cols-6 grid-cols-1 lg:px-20 px-10'>
                <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center'>
                    <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>{t('engineering_blog_title_part_1')} <span className='text-[#78A6FF]'>{t('engineering_blog_title_part_2')}</span></h1>
                </div>
                <div className='sm:col-span-1 w-full col-span-1 flex items-center justify-center'>
                    <a href="/blog/" className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#B3C73E]" aria-current="page"><Button title={t('engineering_blog_explore_button')}></Button></a>
                </div>
            </div>
            <div className='grid sm:grid-cols-6 grid-cols-1 lg:px-40 px-10'>
                <div className='sm:col-span-1 w-full col-span-1 flex items-center justify-center fontedBebas'>
                    <h2 className='-rotate-90 text-[#FF78B9] ml-10 mt-20 text-[42px] w-full whitespace-nowrap'>{t('engineering_blog_latest_articles')}</h2>
                </div>
                <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    {
                        props.posts.length == 0 ? <div className='h-[300px] text-center flex justify-center items-center'>
                            <p>{t('engineering_blog_no_articles')}</p>
                        </div> : null
                    }
                    {
                        props.posts.length == 1 ? <div className='h-[300px] text-center justify-center items-center p-0'>
                            <div className='w-full h-full bg-green-200'>
                            <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                <a href="/blog/">
                                    <img src={props.posts[0].image} alt={t(props.posts[0].title)} className='w-full h-full object-cover' />
                                </a>
                                <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                {/* <p className={`drop-shadow-[1px_1px_rgba(255,242,56,1)] hover:text-[${props.posts[0].titleColor}]`}>Do you want to get notified when a new component is added to Flowbite?</p> */}
                                <div className='flex'> <img src={props.posts[0].category.icon} className='w-6 h-6 mr-2' /> <p className={`text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(props.posts[0].category.title, {ns: 'eb'})}</p></div>
                                <p className={`line-clamp-2 mt-2 text-[36px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(props.posts[0].title, {ns: 'eb'})}</p>
                                <p className='text-[16px] text-black transition duration-200 opacity-50'>{props.posts[0].date}</p>
                                <div></div>
                            </figcaption>
                            </figure>
                            </div>
                        </div> : null
                    }
                    {
                        props.posts.length == 2 ? <div className='h-[300px] text-center justify-center items-center p-0 flex'>
                            {
                                props.posts.map((item, index) => <div className={`${index == 0 ? 'w-[65%]' : 'w-[35%]'} h-full bg-green-200`} key={index}>
                                <a href={`/blog/${item.url}`}>
                                <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                    
                                        <img src={item.image} alt={t(item.title)} className='w-full h-full object-cover' />
                                    
                                    <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                    <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'eb'})}</p></div>
                                    <p className={`leading-none line-clamp-2 mt-0 text-[36px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'eb'})}</p>
                                    <p className='absolute bottom-0 text-[16px] text-black transition duration-200 opacity-50'>{item.date}</p>
                                    <div></div>
                                </figcaption>
                                </figure>
                                </a>
                                </div>)
                            }
                        </div> : null
                    }
                    {
                        props.posts.length == 3 ? <div className='h-[300px] text-center justify-center items-center p-0 flex'>
                            {
                                props.posts.map((item, index) => <div className={`${index == 0 ? 'w-[50%]' : 'w-[25%]'} h-full bg-green-200`} key={index}>
                                <a href={`/blog/${item.url}`}>
                                <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                    
                                        <img src={item.image} alt={t(item.title)} className='w-full h-full object-cover' />
                                    
                                    <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                    <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'eb'})}</p></div>
                                    <p className={`leading-none line-clamp-2 mt-0 text-[36px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'eb'})}</p>
                                    <p className='absolute bottom-0 text-[16px] text-black transition duration-200 opacity-50'>{item.date}</p>
                                    <div></div>
                                </figcaption>
                                </figure>
                                </a>
                                </div>)
                            }
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
  }