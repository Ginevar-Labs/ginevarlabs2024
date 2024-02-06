import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from "react";
import {motion, useInView} from 'framer-motion'

interface PortItemProps {
    index: any;
    item: any;
}

export default function PortItem(props: PortItemProps) {
    const { t } = useTranslation();
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <motion.div 
        key={props.index} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition:{duration: 2} }}
       
        className='my-10 group transition-all duration-500 relative group border-dashed border-white hover:border-[#FAFF00] lg:border-b-[2px] w-[80%] mx-[10%] lg:h-[300px] transition duration-500 opacity-100'>
            <div className='filter  transition duration-500 lg:absolute block lg:hidden lg:bottom-0 lg:left-20 border-dashed border-white border-b-[2px]'>
                <img className='filter transition duration-500 w-full h-[200px] object-cover' src={props.item.img} alt={t('portfolio_highlights_slogan', { ns: 'common'})}  />
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2'>
                <div className='lg:col-span-2 col-span-0'></div>
                <div className='col-span-2 lg:h-[300px] flex justify-left items-center text-white text-left lg:px-10'>
                    <div>
                    <p className='text-[20px] opacity-50 text-center md:text-start mt-2'>{props.item.client}</p>
                    <h2 className='text-[36px] group-hover:text-[#FAFF00] text-center md:text-start'>{t(props.item.slogan, { ns: 'common'})}</h2>
                    <p className='text-[16px] text-center md:text-start'>{t(props.item.desc, { ns: 'common'})}</p>
                    </div>
                </div>
            </div>
        <div className='filter grayscale group-hover:grayscale-0 transition duration-500 lg:absolute lg:block hidden lg:bottom-0 lg:left-20'>
            <img className={`w-full ${props.item.category.indexOf('Mobile') == -1 ? 'w-[300px]' : 'w-[360px]'}  h-[300px]  object-contain`} src={props.item.img} alt={t('portfolio_highlights_slogan', { ns: 'common'})} />
        </div>
    </motion.div>
    )
  }