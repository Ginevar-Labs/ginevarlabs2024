import { useTranslation } from 'next-i18next';
import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem(props: FAQItemProps) {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(false);
  
    return (
        <div className='relative w-full fontedBebas transition-all duration-500 mb-6'>
        <div onClick={() => {
            setSelected(!selected);
        }} className='cursor-pointer text-black w-full border-dashed border-b-[2px] border-gray-800'>
            {props.question}
        </div>
        <div className={`text-[#7D7D72] w-full transition-all duration-500 ${selected == false ? 'opacity-0 h-[4px]' : 'opacity-100 mb-10'}`}>
            {props.answer}
        </div>
    </div>
    )
  }