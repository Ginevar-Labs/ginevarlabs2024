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
            <h1 className='text-black drop-shadow-[4px_4px_rgba(255,242,56,1)] lg:text-[82px] text-[42px]'>{t('service_offering_title', { ns: 'common'})}</h1>
        </div>
        <div className='w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#9DC79C] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#82A5F8'
                    }}>{t('services_menu_item_mobile_studio', { ns: 'common'})}</h2>
                </div>
                <ServiceFlipBox left={{
                    title: t('service_offering_mobile_app_pack', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'><span className='text-[#EE807C]'>{t('service_offering_mobile_app_pack_1_col', { ns: 'common'})}</span> {t('service_offering_mobile_app_pack_1_text', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_2_pre_text', { ns: 'common'})} <span className='text-[#EE80B7]'>{t('service_offering_mobile_app_pack_2_col', { ns: 'common'})}</span> {t('service_offering_mobile_app_pack_2_post_text', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_3_pre_text', { ns: 'common'})} <span className='text-[#B7C656]'>{t('service_offering_mobile_app_pack_3_col', { ns: 'common'})}</span> {t('service_offering_mobile_app_pack_3_post_text', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_4_pre_text', { ns: 'common'})}<span className='text-[#9DC79C]'> {t('service_offering_mobile_app_pack_4_col', { ns: 'common'})}</span></p>,
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_5_pre_text', { ns: 'common'})}<span className='text-[#82A5F8]'> {t('service_offering_mobile_app_pack_5_col', { ns: 'common'})} </span>{t('service_offering_mobile_app_pack_5_post_text', { ns: 'common'})}</p>
                    ]
                }} right={{
                    title: t('service_offering_staff_augmentation', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'>{t('service_offering_staff_augmentation_1_pre', { ns: 'common'})} <u className='text-[#EE807C]'>Flutter</u> {t('service_offering_staff_augmentation_1_mid', { ns: 'common'})} <u className='text-[#747473]'>React Native</u> {t('service_offering_staff_augmentation_1_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_staff_augmentation_2_pre', { ns: 'common'})} <u className='text-[#9DC79C]'>Swift+Objective C</u> {t('service_offering_staff_augmentation_2_mid', { ns: 'common'})} <u className='text-[#9DC79C]'>Kotlin</u> {t('service_offering_staff_augmentation_2_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'><span className='text-[#EE80B7]'>{t('service_offering_staff_augmentation_3_pre', { ns: 'common'})}</span> {t('service_offering_staff_augmentation_3_mid', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_staff_augmentation_4_a', { ns: 'common'})} <u>{t('service_offering_staff_augmentation_4_a_pre', { ns: 'common'})}</u> {t('service_offering_staff_augmentation_4_a_mid', { ns: 'common'})} <u>{t('service_offering_staff_augmentation_4_b_pre', { ns: 'common'})}</u> {t('service_offering_staff_augmentation_4_b_mid', { ns: 'common'})}</p>
                    ]
                }} 
                    techStack={ServiceFlipBoxStack.MOBILE}
                />
        </div>
      </div>
    )
  }