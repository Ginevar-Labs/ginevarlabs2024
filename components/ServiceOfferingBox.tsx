import { useTranslation } from 'next-i18next';
import 'flowbite';
import { useRouter } from 'next/router';
import Button from './Button';
import Link from 'next/link';
import ServiceFlipBox, { ServiceFlipBoxStack } from './ServiceFlipBox';

interface ServiceOfferingBoxProps {
    locale: string
}

export default function ServiceOfferingBox(props: ServiceOfferingBoxProps) {
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
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_5_pre_text', { ns: 'common'})}<span className='text-[#82A5F8]'> {t('service_offering_mobile_app_pack_5_col', { ns: 'common'})} </span>{t('service_offering_mobile_app_pack_5_post_text', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_mobile_app_pack_6_pre', { ns: 'common'})}<span className='text-[#EE807C]'> {t('service_offering_mobile_app_pack_6_post', { ns: 'common'})} </span></p>
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
                    locale={props.locale}
                />
        </div>
        <div className='mt-10 w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#EE807C] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#B7C656'
                    }}>{t('services_menu_item_shopify', { ns: 'common'})}</h2>
                </div>
                <ServiceFlipBox left={{
                    title: t('service_offering_ecommerce_pack', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'><span className='text-[#98C498]'>{t('service_offering_shopify_pack_1_pre', { ns: 'common'})}</span> {t('service_offering_shopify_pack_1_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'><span className='text-[#EE80B7]'>{t('service_offering_shopify_pack_2_a_pre', { ns: 'common'})}</span> {t('service_offering_shopify_pack_2_a_post', { ns: 'common'})} <span className='text-[#EE80B7]'>{t('service_offering_shopify_pack_2_b_pre', { ns: 'common'})}</span> {t('service_offering_shopify_pack_2_b_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_shopify_pack_3_a_pre', { ns: 'common'})} <span className='text-[#EE807C]'>{t('service_offering_shopify_pack_3_a_post', { ns: 'common'})}</span> {t('service_offering_shopify_pack_3_b_pre', { ns: 'common'})} <span className='text-[#78A6FF]'>{t('service_offering_shopify_pack_3_b_post', { ns: 'common'})}</span>{t('service_offering_shopify_pack_4_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_shopify_pack_4_pre', { ns: 'common'})} <span className='text-[#78A6FF]'>{t('service_offering_shopify_pack_4_post', { ns: 'common'})}</span></p>,
                        <p className='text-[16px]'>{t('service_offering_shopify_pack_5_0', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('service_offering_shopify_pack_5_pre', { ns: 'common'})}</span> {t('service_offering_shopify_pack_5_post', { ns: 'common'})}</p>,
                    ]
                }} right={{
                    title: t('service_offering_staff_augmentation', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'>{t('service_offering_shopify_staff_augmentation_1_pre', { ns: 'common'})}<u className='text-[#EE807C]'>React.js</u> {t('service_offering_shopify_staff_augmentation_1_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_shopify_staff_augmentation_2_a_pre', { ns: 'common'})}<span className='text-[#78A6FF]'>{t('service_offering_shopify_staff_augmentation_2_a_post', { ns: 'common'})}</span>{t('service_offering_shopify_staff_augmentation_2_b_pre', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('service_offering_shopify_staff_augmentation_2_b_post', { ns: 'common'})}</span>{t('service_offering_shopify_staff_augmentation_2_c', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_offering_staff_augmentation_4_a', { ns: 'common'})} <u>{t('service_offering_staff_augmentation_4_a_pre', { ns: 'common'})}</u> {t('service_offering_staff_augmentation_4_a_mid', { ns: 'common'})} <u>{t('service_offering_staff_augmentation_4_b_pre', { ns: 'common'})}</u> {t('service_offering_staff_augmentation_4_b_mid', { ns: 'common'})}</p>
                    ]
                }} 
                    techStack={ServiceFlipBoxStack.SHOPIFY}
                    locale={props.locale}
                />
        </div>
        <div className='mt-10 w-full grid lg:grid-cols-6 grid-cols-1 lg:px-20 px-0'>
                <div className='w-full col-span-1 items-center justify-center fontedBebas'>
                    <h2 className='lg:-rotate-90 -rotate-0 text-[#EE80B7] lg:text-left text-center lg:mt-40 lg:ml-[-45px] ml-0 mt-0 text-[42px] w-full whitespace-nowrap' style={{
                        textDecoration: 'underline',
                        textDecorationColor: '#747473'
                    }}>{t('services_menu_item_web3_studio', { ns: 'common'})}</h2>
                </div>
                <ServiceFlipBox left={{
                    title: t('service_web3_studio_nft_project', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'><span className='text-[#98C498]'>{t('service_web3_studio_nft_project_pack_a_pre', { ns: 'common'})}</span>{t('service_web3_studio_nft_project_pack_a_text', { ns: 'common'})}<span className='text-[#B3C73E]'>{t('service_web3_studio_nft_project_pack_a_post', { ns: 'common'})}</span> </p>,
                        <p className='text-[16px]'><span className='text-[#EE80B7]'>{t('service_web3_studio_nft_project_pack_b_pre', { ns: 'common'})}</span>{t('service_web3_studio_nft_project_pack_b_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'><span className='text-[#EE807C]'>{t('service_web3_studio_nft_project_pack_d', { ns: 'common'})}</span></p>,
                        <p className='text-[16px]'>{t('service_web3_studio_nft_project_pack_c_pre', { ns: 'common'})}<span className='text-[#78A6FF]'>{t('service_web3_studio_nft_project_pack_c_post', { ns: 'common'})}</span></p>,
                        <p className='text-[16px]'><span className='text-[#B3C73E]'>{t('service_web3_studio_nft_project_pack_e_pre', { ns: 'common'})}</span>{t('service_web3_studio_nft_project_pack_e_pretext', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('service_web3_studio_nft_project_pack_e_post', { ns: 'common'})}</span>{t('service_web3_studio_nft_project_pack_e_posttext', { ns: 'common'})}</p>,
                    ]
                }} right={{
                    title: t('service_offering_staff_augmentation', { ns: 'common'}),
                    htmlItems: [
                        <p className='text-[16px]'>{t('service_web3_studio_staff_augmentation_1_pre', { ns: 'common'})}<u className='text-[#EE807C]'>React.js + Next.js</u> {t('service_web3_studio_staff_augmentation_1_post', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_web3_studio_staff_augmentation_2_0', { ns: 'common'})}<span className='text-[#EE80B7]'>{t('service_web3_studio_staff_augmentation_2_0_post', { ns: 'common'})}</span>{t('service_web3_studio_staff_augmentation_2_a_pre', { ns: 'common'})}<span className='text-[#78A6FF]'>{t('service_web3_studio_staff_augmentation_2_a_post', { ns: 'common'})}</span>{t('service_web3_studio_staff_augmentation_2_b', { ns: 'common'})}</p>,
                        <p className='text-[16px]'>{t('service_web3_studio_staff_augmentation_3_a', { ns: 'common'})} <u className='text-[#B3C73E]'>{t('service_web3_studio_staff_augmentation_3_a_pre', { ns: 'common'})}</u> {t('service_web3_studio_staff_augmentation_3_a_mid', { ns: 'common'})} <u className='text-[#B3C73E]'>{t('service_web3_studio_staff_augmentation_3_b_pre', { ns: 'common'})}</u>{t('service_web3_studio_staff_augmentation_3_b_mid', { ns: 'common'})}</p>
                    ]
                }} 
                    techStack={ServiceFlipBoxStack.WEB3}
                    locale={props.locale}
                />
        </div>
      </div>
    )
  }