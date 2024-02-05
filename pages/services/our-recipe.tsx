
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState, useRef } from 'react';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';
import Button from '@/components/Button';
import {motion, useScroll, useInView, useTransform, useMotionValueEvent } from 'framer-motion'

export default function Home({ locale }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  const [researchStageSelected, setResearchStageSelected] = useState(1);
  const [triggerResearchStageSelected, setTriggerResearchStageSelected] = useState(false);

  const [brandStageSelected, setBrandStageSelected] = useState(1);
  const [triggerBrandStageSelected, setTriggerBrandStageSelected] = useState(false);

  const [buildingStageSelected, setBuildingStageSelected] = useState(1);
  const [triggerBuildingStageSelected, setTriggerBuildingStageSelected] = useState(false);

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    initFlowbite();
  }, [])

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest>=0.1328) {
        setScrolled(true)
    } else {setScrolled(false)}
  })
  const scaleX = useTransform(scrollYProgress,[0, 0.625],[0.12, 1])

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <Header currentPage='services' locale={locale} />
      <main
        className={`flex flex-col bg-[#1F1D1D] fontedBebas `}
      >
        <motion.div initial={{height:0}}  animate={{ height: "revert-layer" }}  transition={{ type: "spring", bounce: 0.25 }} className='relative w-full h-[300px] flex justify-center items-center border-white border-dashed border-b-[2px] box-shadow-[4px_4px_rgba(255,242,56,1)]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src='/assets/banners/banner-1.png' alt='Ginevar - Banner'/>
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'/>
            <p className='relative text-center text-white text-[72px]'>
                {t('main_menu_item_services_our_recipe', { ns: 'common'})}
            </p>
        </motion.div>
        <div className='lg:px-20 px-10 py-10 relative'>
            <h1 ref={ref} className='text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                {t('services_our_recipe_work_cycle', { ns: 'common'})}
            </h1>
            <motion.div id='containerTop' className={`py-[2em] ${isInView? "":"fixed"} bg-[#1F1D1D] z-50 w-[90vw]  top-0`}>
                <div className=' w-full lg:grid hidden grid-cols-7 text-white'>
                    <div className='col-span-1 px-4'>
                        <p>{t('services_our_recipe_work_cycle_research', { ns: 'common'})}</p>
                    </div>
                    <div className='col-span-2 px-4'>
                        <p>{t('services_our_recipe_work_cycle_brand_prototyping', { ns: 'common'})}</p>
                    </div>
                    <div className='col-span-2 px-4'>
                        <p>{t('services_our_recipe_work_cycle_building', { ns: 'common'})}</p>
                    </div>
                    <div className='col-span-1 px-4'>
                        <p>{t('services_our_recipe_work_cycle_testing', { ns: 'common'})}</p>
                    </div>
                    <div className='col-span-1 px-4'>
                        <p>{t('services_our_recipe_work_cycle_launch', { ns: 'common'})}</p>
                    </div>
                </div>
                <div className='relative w-full mt-4'>
                    <p className='invisible md:visible  lg:hidden text-white'>[Current status]</p>
                    <div className='invisible md:visible w-full h-[5px] bg-[#FAFF00] opacity-25'/>
                    <motion.div style={{ scaleX }} id='progressbar'/>
                </div>
            </motion.div>
            <div >
        <div className={`flex ${isInView? "":"mt-[9rem]"}`}>
            <div className='relative w-20'>
            <div className='h-[70%] '/>
                <div className='h-[30%] w-full border-t-[2px] border-l-[2px] border-dashed border-white'/>
            </div>
        <h2 className='text-white drop-shadow-[2px_2px_rgba(255,242,56,1)] lg:text-[36px] text-[24px] mt-10'>
            {t('services_our_recipe_work_cycle_research', { ns: 'common'})}
        </h2>
        </div>
        <div className='w-full border-l-[2px] border-dashed border-white lg:px-10 px-4 text-white'>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_research_intro', { ns: 'common'})}
            </p><br/>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='col-span-1'>
                    <div onClick={() => {
                        setTriggerResearchStageSelected(true);
                        setTimeout(() => {
                            setResearchStageSelected(1)
                            setTriggerResearchStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                            <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>1</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_research_stage_1', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerResearchStageSelected(true);
                        setTimeout(() => {
                            setResearchStageSelected(2)
                            setTriggerResearchStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>2</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_research_stage_2', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerResearchStageSelected(true);
                        setTimeout(() => {
                            setResearchStageSelected(3)
                            setTriggerResearchStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>3</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_research_stage_3', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerResearchStageSelected(true);
                        setTimeout(() => {
                            setResearchStageSelected(4)
                            setTriggerResearchStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>4</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_research_stage_4', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerResearchStageSelected(true);
                        setTimeout(() => {
                            setResearchStageSelected(5)
                            setTriggerResearchStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>5</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_research_stage_5', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                </div>

                <div className='col-span-1 text-white opacity-75 mt-4'>
                    
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${researchStageSelected == 1 ? '' : 'h-[1px]'} ${triggerResearchStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_research_stage_1_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${researchStageSelected == 2 ? '' : 'h-[1px]'} ${triggerResearchStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_research_stage_2_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${researchStageSelected == 3 ? '' : 'h-[1px]'} ${triggerResearchStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_research_stage_3_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${researchStageSelected == 4 ? '' : 'h-[1px]'} ${triggerResearchStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_research_stage_4_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${researchStageSelected == 5 ? '' : 'h-[1px]'} ${triggerResearchStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_research_stage_5_text', { ns: 'common'})}
                </p>
                    
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='relative w-20'>
            <div className='h-[70%] w-full border-l-[2px] border-dashed border-white'/>
                <div className='h-[30%] w-full border-t-[2px] border-l-[2px] border-dashed border-white'/>
            </div>
        <h2 className='text-white drop-shadow-[2px_2px_rgba(255,242,56,1)] lg:text-[36px] text-[24px] mt-10'>
            {t('services_our_recipe_work_cycle_brand_prototyping', { ns: 'common'})}
        </h2>
        </div>
        <div className='w-full border-l-[2px] border-dashed border-white lg:px-10 px-4 text-white'>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_brand_intro', { ns: 'common'})}
            </p>
            <br/>
            <p className='lg:text-[22px] text-[16px] underline'>
                {t('services_our_recipe_work_cycle_brand_subtitle', { ns: 'common'})}
            </p>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_brand_subtitle_text', { ns: 'common'})}
            </p><br/>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='col-span-1'>
                    <div onClick={() => {
                        setTriggerBrandStageSelected(true);
                        setTimeout(() => {
                            setBrandStageSelected(1)
                            setTriggerBrandStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                            <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>1</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_brand_stage_1', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerBrandStageSelected(true);
                        setTimeout(() => {
                            setBrandStageSelected(2)
                            setTriggerBrandStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>2</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_brand_stage_2', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerBrandStageSelected(true);
                        setTimeout(() => {
                            setBrandStageSelected(3)
                            setTriggerBrandStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>3</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_brand_stage_3', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerBrandStageSelected(true);
                        setTimeout(() => {
                            setBrandStageSelected(4)
                            setTriggerBrandStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>4</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_brand_stage_4', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                </div>

                <div className='col-span-1 text-white opacity-75 mt-4'>
                    
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${brandStageSelected == 1 ? '' : 'h-[1px]'} ${triggerBrandStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_brand_stage_1_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${brandStageSelected == 2 ? '' : 'h-[1px]'} ${triggerBrandStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_brand_stage_2_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${brandStageSelected == 3 ? '' : 'h-[1px]'} ${triggerBrandStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_brand_stage_3_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${brandStageSelected == 4 ? '' : 'h-[1px]'} ${triggerBrandStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_brand_stage_4_text', { ns: 'common'})}
                </p>
                    
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='relative w-20'>
            <div className='h-[70%] w-full border-l-[2px] border-dashed border-white'/>
                <div className='h-[30%] w-full border-t-[2px] border-l-[2px] border-dashed border-white'/>
            </div>
        <h2 className='text-white drop-shadow-[2px_2px_rgba(255,242,56,1)] lg:text-[36px] text-[24px] mt-10'>
            {t('services_our_recipe_work_cycle_building', { ns: 'common'})} {t('services_our_recipe_work_cycle_building_extra_title', { ns: 'common'})}
        </h2>
        </div>
        <div className='w-full border-l-[2px] border-dashed border-white lg:px-10 px-4 text-white'>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_building_intro', { ns: 'common'})}
            </p>
            <br/>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='col-span-1'>
                    <div onClick={() => {
                        setTriggerBuildingStageSelected(true);
                        setTimeout(() => {
                            setBuildingStageSelected(1)
                            setTriggerBuildingStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                            <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>1</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_building_stage_1', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <div onClick={() => {
                        setTriggerBuildingStageSelected(true);
                        setTimeout(() => {
                            setBuildingStageSelected(2)
                            setTriggerBuildingStageSelected(false);
                        }, 500)
                    }} className='cursor-pointer relative flex group lg:w-[70%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)] z-0'>
                        <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>2</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_building_stage_2', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                </div>

                <div className='col-span-1 text-white opacity-75 mt-4'>
                    
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${buildingStageSelected == 1 ? '' : 'h-[1px]'} ${triggerBuildingStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_building_stage_1_text', { ns: 'common'})}
                </p>
                <p className={`lg:text-[22px] text-[16px] transition duration-500 overflow-hidden ${buildingStageSelected == 2 ? '' : 'h-[1px]'} ${triggerBuildingStageSelected == false ? ' opacity-100' : ' opacity-0'}`}>
                                {t('services_our_recipe_work_cycle_building_stage_2_text', { ns: 'common'})}
                </p>
                    
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='relative w-20'>
            <div className='h-[70%] w-full border-l-[2px] border-dashed border-white'/>
                <div className='h-[30%] w-full border-t-[2px] border-l-[2px] border-dashed border-white'/>
            </div>
        <h2 className='text-white drop-shadow-[2px_2px_rgba(255,242,56,1)] lg:text-[36px] text-[24px] mt-10'>
            {t('services_our_recipe_work_cycle_testing', { ns: 'common'})} {t('services_our_recipe_work_cycle_building_extra_title', { ns: 'common'})}
        </h2>
        </div>
        <div className='w-full border-l-[2px] border-dashed border-white lg:px-10 px-4 text-white'>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_testing_intro', { ns: 'common'})}
            </p>
            <br/>
        </div>
        <div className='flex'>
            <div className='relative w-20'>
            <div className='h-[70%] w-full border-l-[2px] border-dashed border-white'/>
                <div className='h-[30%] w-full border-t-[2px] border-l-[2px] border-dashed border-white'/>
            </div>
        <h2 className='text-white drop-shadow-[2px_2px_rgba(255,242,56,1)] lg:text-[36px] text-[24px] mt-10'>
            {t('services_our_recipe_work_cycle_launch', { ns: 'common'})}
        </h2>
        </div>
        <div className='w-full border-l-[2px] border-dashed border-white lg:px-10 px-4 text-white'>
            <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_launch_intro', { ns: 'common'})}
            </p>

            <div className='relative flex group lg:w-[50%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                            <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>1</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_launch_section_web', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div>
                    <p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_launch_section_web_text', { ns: 'common'})}
            </p>
            <br/>

            <div className='relative flex group lg:w-[50%] w-full my-2 z-0'>
                        <div className='z-50 w-8 h-8 bg-black drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
                            <p className='lg:text-[22px] text-[16px] lg:pt-0 pt-1 text-center transition duration-500 group-hover:text-[#FAFF00]'>2</p>
                        </div>
                        <p className='ml-4 mt-1 lg:text-[22px] text-[16px] transition duration-500 group-hover:text-[#FAFF00]'>{t('services_our_recipe_work_cycle_launch_section_mobile', { ns: 'common'})}</p>
                        <div className='z-0 absolute bottom-[1px] w-full ml-6 h-[4px] bg-[#FAFF00] opacity-25 transition duration-500 group-hover:opacity-100'/>
                    </div><p className='lg:text-[22px] text-[16px]'>
                {t('services_our_recipe_work_cycle_launch_section_mobile_text', { ns: 'common'})}
            </p>
            <br/>
        </div>
        
    </div>


            <h1 className='mt-10 text-white drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[72px] text-[42px]'>
                Tech Stack
            </h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 text-white text-center'>
                <motion.div className='col-span-1 border-dashed border-[2px] border-white p-2 hover:border-[#FAFF00] hover:text-[#FAFF00] transition ease-in-out delay-100'>
                    <p>Native Mobile Development</p>
                    <div className='w-full flex content-center justify-center py-10'>
                        <img src='/assets/icons/techstack/icon_swift.png' className='w-20 m-5' alt='Swift'/>
                        <img src='/assets/icons/techstack/icon_kotlin.png' className='w-20 m-5' alt='Kotlin'/>
                    </div>
                </motion.div>
                <div className='col-span-1 border-dashed border-[2px] border-white p-2 hover:border-[#FAFF00] hover:text-[#FAFF00] transition ease-in-out delay-100'>
                    <p>Cross Platform Mobile Development</p>
                    <div className='w-full flex content-center justify-center py-10'>
                        <img src='/assets/icons/techstack/icon_flutter.png' className='w-20 m-5' alt='Flutter'/>
                        <img src='/assets/icons/techstack/icon_reactnative.png' className='w-20 m-5' alt='React Native'/>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 text-white text-center'>
                <div className='lg:col-span-2 col-span-1 border-dashed border-[2px] border-white p-2 mt-10 hover:border-[#FAFF00] hover:text-[#FAFF00] transition ease-in-out delay-100'>
                    <p>Web and Blockchain</p>
                    <div className='w-full flex content-center justify-center py-5'>
                        <img src='/assets/icons/techstack/icon_solidity.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5' alt='Solidity'/>
                        <img src='/assets/icons/techstack/icon_eth.png'  className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5' alt='Ethereum'/>
                        <img src='/assets/icons/techstack/icon_nodejs.png'  className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5' alt='Node.js'/>
                        <img src='/assets/icons/techstack/icon_remix.png'  className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5' alt='Remix'/>
                    </div>
                    <div className='w-full flex content-center justify-center py-5'>
                        <img src='/assets/icons/techstack/icon_react.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='React.js'/>
                        <img src='/assets/icons/techstack/icon_ipfs.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='IPFS'/>
                        <img src='/assets/icons/techstack/icon_truffle.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='Truffle'/>
                        <img src='/assets/icons/techstack/icon_python.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='Python'/>
                    </div>
                </div>
                <div className='col-span-1 border-dashed border-[2px] border-white p-2 mt-10 hover:border-[#FAFF00] hover:text-[#FAFF00] transition ease-in-out delay-100'>
                    <p>Shopify</p>
                    <div className='w-full flex content-center justify-center lg:py-5 py-2'>
                        <img src='/assets/icons/techstack/icon_shopify.png'className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='Shopify'/>
                    </div>
                    <div className='w-full flex content-center justify-center lg:py-5 py-2'>
                        <img src='/assets/icons/techstack/icon_woo.png' className='lg:w-20 lg:h-20 w-10 h-10 lg:m-5 m-5'  alt='Woo Commerce'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-20 relative w-full text-center fontedBebas h-[300px] flex content-center items-center justify-center my-10'>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute top-0 left-0 lg:left-20 border-t-[3px] border-l-[3px] border-dashed border-white'/>
                    <div className='lg:w-40 lg:h-40 w-20 h-20 absolute bottom-0 right-0 lg:right-20 border-b-[3px] border-r-[3px] border-dashed border-white'/>
                    <div className='w-[200px]'>
                        <Link href='/get-in-touch' locale={locale}>
                            <Button light={true} title={t('main_menu_item_get_in_touch', { ns: 'common'})} textSize='text-[24px]'/>
                        </Link>
                    </div>
                </div>
        
      </main>
      <Footer currentPage='services' locale={locale}/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale: locale
    },
  };
};