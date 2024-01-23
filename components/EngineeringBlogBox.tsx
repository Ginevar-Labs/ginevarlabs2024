import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Button from './Button';
import Link from 'next/link';

interface EngineeringBlogBoxProps {
    categories: any[]
    posts: any[]
    locale: string
}

export default function EngineeringBlogBox(props: EngineeringBlogBoxProps) {
    const { t } = useTranslation();
    const [indexSelected, setIndexSelected] = useState(0);
  
    return (
        <div id='blog' className='my-10'>
            <div className='grid sm:grid-cols-6 grid-cols-1 lg:px-20 px-10'>
                <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center'>
                    <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>{t('engineering_blog_title_part_1', { ns: 'common'})} <span className='text-[#78A6FF]'>{t('engineering_blog_title_part_2', { ns: 'common'})}</span></h1>
                </div>
                <div className='sm:col-span-1 w-full col-span-1 flex items-center justify-center'>
                    <Link locale={props.locale} href="/blog/" className="block py-2 px-3 rounded lg:bg-transparent text-black lg:p-0 transition duration-200 fontedBebas hover:text-[#B3C73E]" aria-current="page"><Button title={t('engineering_blog_explore_button', { ns: 'common'})}></Button></Link>
                </div>
            </div>
            <div className='grid sm:grid-cols-6 grid-cols-1 lg:px-40 px-10'>
                <div className='sm:col-span-1 w-full col-span-1 flex items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#FF78B9] ml-[-100px] lg:mt-20 mt-4 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#9DC79C'
                    }}>{t('engineering_blog_latest_articles', { ns: 'common'})}</h2>
                </div>
                <div className='sm:col-span-5 w-full col-span-1 fontedBebas lg:text-left text-center border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block'>
                    {
                        props.posts.length == 0 ? <div className='lg:h-[300px] h-[100px] text-center flex justify-center items-center'>
                            <p>{t('engineering_blog_no_articles', { ns: 'common'})}</p>
                        </div> : null
                    }
                    {
                        props.posts.length >= 1 ? <div>
                            <div className='lg:block hidden '>
                                <div className='h-[300px] text-center justify-center items-center p-0 flex'>
                                {
                                    props.posts.sort((a, b) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item, index) => index >= 3 ? null : <div className={`lg:block hidden ${index == indexSelected ? 
                                        (props.posts.length == 1 ? 'w-full' : props.posts.length == 2 ? 'w-[65%]' : 'w-[50%]') : 
                                        (props.posts.length == 1 ? 'w-full' : props.posts.length == 2 ? 'w-[35%]' : 'w-[25%]')
                                    } transition-all duration-300 h-full bg-green-200 cursor-pointer`} onClick={() => {
                                        setIndexSelected(index)
                                    }} key={index}>
                                    
                                    <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                        
                                            <img src={item.image} alt={t(item.title, { ns: 'eb'})} className='w-full h-full object-cover' />
                                        
                                        <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                        <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'eb'})}</p></div>
                                        <Link href={`/blog/${item.url}`} locale={props.locale}>
                                        <p className={`leading-none line-clamp-2 mt-0 text-[30px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'eb'})}</p>
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
                                    props.posts.sort((a, b) => a.date.split('/').reverse().join('/') > b.date.split('/').reverse().join('/') ? -1 : 1).map((item, index) => index >= 3 ? null : 
                                        <div key={index} className='h-[300px] my-4 relative sm:col-span-1 col-span-1 flex'>
                                        <figure className={`relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                                            
                                            <img src={item.image} alt={t(item.title, { ns: 'eb'})} className='w-full h-full object-cover' />
                                        
                                        <figcaption className={`absolute px-8 py-4 text-lg bottom-0 bg-[#FFF238] transition duration-200  text-white hover:text-[#82A5F8] hover:bg-opacity-100 bg-opacity-75 w-full h-[140px] text-left`}>
                                        <div className='flex'> <img src={item.category.icon} className='w-6 h-6 mr-2' /> <p className={`line-clamp-1 text-black opacity-75 drop-shadow-[1px_1px_rgba(255,242,56,1)]`}>{t(item.category.title, {ns: 'eb'})}</p></div>
                                        <Link href={`/blog/${item.url}`} locale={props.locale}>
                                        <p className={`leading-none line-clamp-2 mt-0 text-[30px] drop-shadow-[1px_1px_rgba(255,242,56,1)] transition duration-100`}>{t(item.title, {ns: 'eb'})}</p>
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
            </div>
        </div>
    )
  }