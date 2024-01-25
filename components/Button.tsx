import { useTranslation } from 'next-i18next';

interface ButtonProps {
    title: string;
    light: boolean;
    textSize?: string;
}

export default function Button(props: ButtonProps) {
    const { t } = useTranslation();
  
    return (
      <div className={`cursor-pointer text-center ${props.light == false ? 'bg-black text-white hover:text-[#FFF238]' : 'bg-white text-black'} px-4 ${props.textSize == undefined ? 'text-[16px]' : props.textSize} py-2 transition duration-500  drop-shadow-[0px_4px_rgba(255,242,56,0.25)] hover:drop-shadow-[4px_4px_rgba(255,242,56,1)]`}>
        {props.title}
      </div>
    )
  }