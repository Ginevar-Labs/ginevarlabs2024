import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export enum JobPostCategory {
    SALES = 'SALES',
    DESIGN = 'DESIGN',
    DEVELOPMENT = 'DEVELOPMENT'
}

interface JobPostProps {
    position: string;
    location: string;
    category: JobPostCategory;
    markdown: any;
}

export default function JobPost(props: JobPostProps) {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(false);
  
    return (
        <div className='grid sm:grid-cols-10 grid-cols-1 my-10'>
                    <div className='w-full col-span-1 flex items-center justify-center fontedBebas'>
                        {
                            props.category == JobPostCategory.SALES ? <h2 className='lg:-rotate-90 -rotate-0 text-[#FF78B9] lg:text-left text-center lg:mt-[-60px] mt-0 text-[24px] w-full whitespace-nowrap' style={{
                                textDecoration: 'underline',
                                textDecorationColor: '#9DC79C'
                            }}>{t('aboutus_careers_job_post_category_sales', { ns: 'common'})}</h2> : null
                        }
                        {
                            props.category == JobPostCategory.DESIGN ? <h2 className='lg:-rotate-90 -rotate-0 text-[#78A6FF] lg:text-left text-center lg:mt-[-30px] mt-0 text-[24px] w-full whitespace-nowrap' style={{
                                textDecoration: 'underline',
                                textDecorationColor: '#EE807C'
                            }}>{t('aboutus_careers_job_post_category_design', { ns: 'common'})}</h2> : null
                        }
                        {
                            props.category == JobPostCategory.DEVELOPMENT ? <h2 className='lg:-rotate-90 -rotate-0 text-[#B3C73E] lg:text-left text-center lg:mt-[40px] mt-0 text-[24px] w-full whitespace-nowrap' style={{
                                textDecoration: 'underline',
                                textDecorationColor: '#6E6E6'
                            }}>{t('aboutus_careers_job_post_category_dev', { ns: 'common'})}</h2> : null
                        }
                    </div>
                    <div className={`col-span-9 ${selected == true ? '' : 'min-h-[160px]'} px-10 py-4 w-full col-span-1 fontedBebas lg:text-left text-center border-dashed lg:border-[2px] border-[2px] border-gray-800 inline-block`}>
                        <p className='text-black'>{props.position}</p>
                        <p className='text-[#6E6E6E]'>{t(props.location, { ns: 'common'})}</p>
                        <div className={`${selected ? 'h-auto' : 'h-[1px]'} overflow-hidden transition-all duration-300`}>
                            <div className={`${selected ? 'opacity-100' : 'opacity-0'} text-left mt-4 overflow-hidden transition-all duration-300`}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} className="fontedBebas text-black dark:text-black my-4 text-lg font-normal text-gray-500 lg:text-xl  markdown text-left" components={{
                                h1: ({node, ...props}) => <h2 className="mb-4 text-2xl font-extrabold tracking-none leading-none text-gray-900 md:text-3xl lg:text-4xl" {...props} />,
                                h3: ({node, ...props}) => <h3 className="mb-4 text-2xl font-extrabold tracking-none leading-none text-gray-900 md:text-3xl lg:text-4xl" {...props} />,
                                h2: ({node, ...props}) => <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl " {...props} />,
                                img: ({node, ...props}) => <img width={2432} height={1442} alt="Ginevar" className="w-[48rem] max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 md:block" {...props} />,
                                p: ({node, ...props}) => <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl" {...props} />,
                                li: ({node, ...props}) => <li className="my-4 text-lg font-normal text-gray-500 lg:text-xl" {...props} />,
                                em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
                            }}>{props.markdown}</ReactMarkdown>
                            </div>
                        </div>
                        <br/>
                        <p className={`${selected ? 'h-auto' : 'h-[1px]'} overflow-hidden transition-all duration-300`}>{t('aboutus_careers_job_post_apply', { ns: 'common'})}<a href='mailto:careers@ginevar.com'>careers@ginevar.com</a></p>
                        <div className='flex'>
                        <p onClick={() => { setSelected(!selected) }} className='mr-4 cursor-pointer text-[#6E6E6E] hover:text-black transition duration-300'>{selected ? t('aboutus_careers_job_post_category_close', { ns: 'common'}) : t('aboutus_careers_job_post_category_read_more', { ns: 'common'})}</p>
                        </div>

                    </div>
                </div>
    )
  }