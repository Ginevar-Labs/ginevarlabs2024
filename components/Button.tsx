import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';

interface ButtonProps {
    title: string;
}

export default function Button(props: ButtonProps) {
    const { t } = useTranslation();
  
    return (
      <div className='cursor-pointer text-center bg-black text-white px-4 text-[16px] py-2 rounded-lg transition duration-200 hover:text-[#FFF238] drop-shadow-[0px_4px_rgba(255,242,56,0.25)] hover:drop-shadow-[4px_4px_rgba(255,242,56,1)]'>
        {props.title}
      </div>
    )
  }