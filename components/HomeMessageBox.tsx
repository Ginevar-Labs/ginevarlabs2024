import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';

interface HomeMessageBoxProps {
    message: string;
}

export default function HomeMessageBox(props: HomeMessageBoxProps) {
    const { t } = useTranslation();
  
    return (
      <div className='relative w-full text-center fontedBebas'>
        <div className='w-40 h-40 absolute top-0 left-20 border-t-[3px] border-l-[3px] border-dashed border-black'/>
        <div className='w-40 h-40 absolute bottom-0 right-20 border-b-[3px] border-r-[3px] border-dashed border-black'/>
        <p className='w-[40%] mx-[30%] my-[100px] inline-block align-middle'>{props.message}</p>
      </div>
    )
  }